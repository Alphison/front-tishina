"use client"

import {useModal} from '@/stores/useModal'
import InputModal from './input'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { useMutation } from '@tanstack/react-query'
import { TResLogin, authService } from '@/services/auth.service'
import Loader from '../Loader'
import { toast } from 'sonner'
import { saveTokenStorage } from '@/services/auth-token.service'
import { AxiosResponse } from 'axios'
import { useAuth } from '@/stores/useAuth'

type TLoginForm = {
    Email: string,
    Password: string
} 

export default function Modal(){
    const isOpen = useModal((state) => state.isOpen)
    const setIsOpen = useModal((state) => state.setIsOpen)
    const setIsAuth = useAuth((state) => state.setIsAuth)

    const {register, reset, handleSubmit, formState: { errors }} = useForm<TLoginForm>()

    const {mutate, isPending, error} = useMutation<any, any>({
        mutationKey: ['login'],
        mutationFn: (values:any) => authService.login(values),
        onSuccess: (data: AxiosResponse<TResLogin>) => {
            saveTokenStorage(data.data.token)
            setIsOpen()
            setIsAuth(true)
            toast.success('Вы успешно вошли!', {
                style: {
                    background: '#4E6F54',
                    border: '1px solid #4E6F54',
                    color: 'white'
                }
            })
        }
    })
    
    error && toast.error(error.response.data.error, {style: {
        background: '#CD5C5C',
        border: '1px solid #CD5C5C',
        color: 'white'
      }},)

    const submit = (values: any) => {            
        mutate(values)

        reset()        
    }

    return (
        <div className={`fixed top-0 left-0 bg-[#00000042] w-full h-full flex items-center justify-center transition-all duration-300
         ${isOpen ? 'opacity-[1] z-[999999]' : 'opacity-0 z-[-1]'}`}
         onClick={() => setIsOpen()}
        >
            <div className={`bg-[#303030] w-[350px] rounded-[16px] transition-all duration-300 p-[55px] ${isOpen ? 'translate-y-[0]' : 'translate-y-[-100%]'}`} onClick={(e) => e.stopPropagation()}>
                <h1 className='font-mono text-[30px] font-medium'>Вход</h1>
                <form onSubmit={handleSubmit(submit)} className='mt-[27px] flex flex-col gap-[15px]'>
                    <InputModal label='email' placeholder={'Email'} register={register}/>
                    <div className='text-[#df5b5b]'>
                        <ErrorMessage errors={errors} name="Email"/>
                    </div>
                    <InputModal label='password' placeholder={'Пароль'} register={register}/>
                    <div className='text-[#df5b5b]'>
                        <ErrorMessage errors={errors} name="Password" />
                    </div>
                    {isPending ? <Loader w={25}/> : 
                    <button className="bg-[#4E6F54] py-[17px] text-[15px] w-full font-mono font-bold rounded-[4px] relative flex items-center justify-center overflow-hidden text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#75B581] before:duration-500 before:ease-out hover:shadow-[#75B581] hover:before:h-56 hover:before:w-full">
                        <span className="relative z-10">Вход</span>
                    </button>}
                    
                </form>                
            </div>
        </div>
    )
}