import InfoBlock from "@/components/profile/infoBlock";

export default function Profile() {
    return (
        <div className="max-w-[1240px] w-full px-[50px] mx-auto mt-[50px]">
            <h1 className="text-[48px] font-mono font-bold mb-[29px]">Контактная информация</h1>
            <div className="flex flex-col gap-[20px]">
                <InfoBlock p1="Фамилия и имя:" p2="Иванов Иван"/>
                <InfoBlock p1="Электронная почта:" p2="Иванов Иван"/>
                <InfoBlock p1="Номер телефона:" p2="Иванов Иван"/>
            </div>            
        </div>
    )
}