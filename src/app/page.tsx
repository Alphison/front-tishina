import Slider from "@/components/home/first-slider/slider";
import GreenBlock from "@/components/home/green-block";
import SliderSecond from "@/components/home/second-slider/slider";

export default function Home() {
  return (
    <main className="w-full 1238:w-[1238px] mx-auto px-[50px] 1238:px-[0px]">
      <div className="flex flex-wrap gap-[33px] mt-[65px]">
        <GreenBlock text='Explore Australia'/>
        <GreenBlock text='Explore Australia'/>
        <GreenBlock text='Explore Australia'/>
      </div>
      <Slider />
      <h1 className="mt-[110px] text-[48px] leading-[59px] font-medium">Explore where<br/>you want.</h1>
      <SliderSecond />
    </main>
  );
}
