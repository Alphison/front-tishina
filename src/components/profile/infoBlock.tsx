export default function InfoBlock({p1, p2}: {p1: string, p2: string}){

    return (
        <div>
            <div className="flex gap-[12px]">
                <p className="font-mono text-[20px] font-semibold">{p1}</p>
                <p className="font-mono text-[20px] font-light">{p2}</p>
            </div>
        </div>
    )
}