import Image from "next/image";

interface IProps {
    src: string,
    name: string,
    description: string
}

export default function WhiteBlock({src, name, description}:IProps) {
    return (
        <div className="bg-white min-w-[536px] flex items-start gap-[24px] p-[32px] rounded-[8px]">
            <Image src={src} width={64} height={64} alt=""/>
            <div>
                <h3 className="text-[24px] text-black font-bold leading-[36px]">{name}</h3>
                <p className="text-[16px] text-black leading-[25px] mt-[16px]">{description}</p>
            </div>
        </div>
    )
}