import Slider from "@/components/home/first-slider/slider";
import GreenBlock from "@/components/home/green-block";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full 1238:w-[1238px] mx-auto px-[50px] 1238:px-[0px]">
      <div className="flex flex-wrap gap-[33px] mt-[65px]">
        <GreenBlock text='Explore Australia'/>
        <GreenBlock text='Explore Australia'/>
        <GreenBlock text='Explore Australia'/>
      </div>
      <Slider />
    </main>
  );
}
