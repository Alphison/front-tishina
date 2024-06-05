import { Path, UseFormRegister } from "react-hook-form"

type IFormValues = {
    email: string,
    password: string
}

type InputProps = {
    label: Path<IFormValues>
    register: any
    placeholder: string
  }

export default function InputModal({ label, register, placeholder}: InputProps){
    return (
        <div>
            <input type="text" {...register(label, {required: `Введите поле ${label}`})} className="bg-white text-[black] rounded-[4px] p-[14px] w-full outline-none" placeholder={placeholder}/>
        </div>
    )
}