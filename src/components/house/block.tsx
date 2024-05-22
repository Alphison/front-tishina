import Image from "next/image";

export default function Block() {
    return (
        <div className="flex items-center gap-[16px]">
            <Image src="/images/iconepta.png" alt="" width={24} height={24} />
            <p className="font-mono text-[15px] font-normal">Pemanas ruangan dan ruang kerja</p>
        </div>
    )
}