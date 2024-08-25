export default function GreenBlock({text}: {text: string}) {
    return (
        <div className="grow w-[250px] 480:basis-[390px] bg-white bg-opacity-[15%] backdrop-blur-lg 480:bg-[#4E6F54] text-[13px] 480:text-[16px] font-bold rounded-[4px] 480:rounded-[10px] py-[19px] text-center">
            {text}
        </div>
    )
} 