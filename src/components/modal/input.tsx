import { Path, UseFormRegister } from "react-hook-form"

type IFormValues = {
    Email: string,
    Password: string
}

type InputProps = {
    label: Path<IFormValues>
    register: UseFormRegister<IFormValues>
  }

export default function InputModal({ label, register}: InputProps){
    return (
        <div>
            <input type="text" {...register(label, {required: `Введите поле ${label}`})} className="bg-white rounded-[4px] p-[14px] w-full outline-none" placeholder={label}/>
        </div>
    )
}