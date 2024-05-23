import { IFeature } from "@/types/house";
import Image from "next/image";

export default function Feature({feature}: {feature: IFeature} ) {
    return (
        <div className="flex items-center gap-[7px]">
            <Image loader={() => feature.icon} src={feature.icon} alt="" width={18} height={18} />
            <p className="font-mono text-[12px] font-normal">{feature.name}</p>
        </div>
    )
}