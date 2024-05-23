import { IFeature } from "@/types/house";
import Image from "next/image";

export default function Block({feature}: {feature: IFeature} ) {
    return (
        <div className="flex items-center gap-[16px]">
            <Image loader={() => feature.icon} src={feature.icon} alt="" width={24} height={24} />
            <p className="font-mono text-[15px] font-normal">{feature.name}</p>
        </div>
    )
}