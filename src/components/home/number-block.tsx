export default function NumberBlock({number, text}: {number: string; text: string}) {
    return (
        <div className="text-center">
            <h1 className="font-bold text-[40px]">{number}</h1>
            <p className="text-[16px] mt-[8px]">{text}</p>
        </div>
    )
}