"use client"

import { feedbackSerivce } from '@/services/feedback.service';
import { IFeedbackData } from '@/types/feedback';
import { ErrorMessage } from '@hookform/error-message';
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import PhoneInput from './PhoneInput/PhoneInput';

export default function InfoUserForm () {

    const {mutate, error} = useMutation({
      mutationKey: ['feedback'],
      mutationFn: (data: IFeedbackData) => feedbackSerivce.create(data),
      onSuccess: () => {
        toast.success('Данные успешно отправлены', {
            style: {
                background: '#4E6F54',
                border: '1px solid #4E6F54',
                color: 'white'
            }
        })
      },
      onError: (error) => {
        toast.error(error.message, {style: {
          background: '#CD5C5C',
          border: '1px solid #CD5C5C',
          color: 'white'
        }},)
      }
    })
    const {register, handleSubmit, reset, formState: {errors}} = useForm<IFeedbackData>()

    const submit = (data: IFeedbackData) => {
      mutate(data)
      reset()
    }

    return (
        <div className="w-full mt-[190px] bg-[#4E6F54] pt-[64px] pb-[80px]">
          <div className="w-full max-w-[1238px] mx-auto px-[50px] 1238:px-[0px] flex flex-col items-center text-center">
            <p className="text-[16px] 480:text-[24px] font-bold">Никакого спама не обещают</p>
            <p className=" text-[20px] 480:text-[40px] font-bold leading-[45px] 480:leading-[56px]">Вы домовладелец?</p>
            <p className="mt-[16px] text-[13px] 480:text-[16px]">Узнайте, как повысить стоимость вашего жилья и попасть в список. Без спама.</p>
            <form onSubmit={handleSubmit(submit)} className="flex gap-[31px] items-center justify-between mt-[28px] flex-wrap">
                <div className='flex flex-col gap-[10px] text-start w-full 650:w-auto'>
                  <input type="text" {...register('phone', {required: 'Введите номер телефона'})} placeholder="Номер" className="w-full outline-none text-[18px] px-[16px] py-[27px] rounded-[8px] placeholder:text-[16px] text-black font-medium"/>
                  <ErrorMessage errors={errors} name="phone"/> 
                </div>
                <div className='flex flex-col gap-[10px] text-start w-full 650:w-auto'>
                  <div className='flex flex-col 400:flex-row gap-[20px] 400:gap-0 items-center bg-white p-[16px] rounded-[8px] w-full'>
                    <input type="text" placeholder="Имя" {...register('name', {required: 'Введите имя'})} className="w-full 650:max-w-[104px] outline-none text-[18px] placeholder:text-[16px] text-black font-medium"/>
                    <button className="py-[12px] px-[40px] w-full 480:w-auto rounded-[8px] font-bold text-[16px] bg-[#4E6F54] hover:bg-[#638a6a] hover:scale-[0.9] transition-all duration-300">Отправить</button>     
                  </div>                  
                  <ErrorMessage errors={errors} name="name"/>
                </div>                
            </form>
            <p className="mt-[24px] text-[14px] font-medium">Присоединяйтесь к более чем 10 000 других арендодателей в нашем сообществе недвижимости.</p>
          </div>
        </div>
    )
}

