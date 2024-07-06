import Image from "next/image";

interface IProps {
    src: string,
    name: string,
    description: string
}

export default function WhiteBlock({src, name, description}:IProps) {
    return (
        <div className="bg-white min-w-[300px] 600:min-w-[536px] flex items-start gap-[13px] 600:gap-[24px] p-[16px] 600:p-[32px] rounded-[4px] 600:rounded-[8px]">
            <Image src={src} width={64} height={64} alt="" className="w-[35px] 600:w-[64px]"/>
            <div>
                <h3 className="text-[13px] 600:text-[24px] text-black font-bold leading-[20px] 600:leading-[36px]">{name}</h3>
                <p className="text-[8px] 600:text-[16px] text-black leading-[14px] 600:leading-[25px] mt-[8px] 600:mt-[16px]">{description}</p>
            </div>
        </div>
    )
}