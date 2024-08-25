import Slider from "@/components/home/first-slider/slider";
import GreenBlock from "@/components/home/green-block";
import InfoUserForm from "@/components/home/InfoUserForm/InfoUserForm";
import NumberBlock from "@/components/home/number-block";
import SliderSecond from "@/components/home/second-slider/slider";
import SliderThree from "@/components/home/three-slider/slider";
import BlockInfo from "@/components/home/block-info/Block-info";
import WhiteBlocks from "@/components/home/white-blocks/white-blocks";
import Image from "next/image";

export default function Home() {
  return (
    <main>

        <div>
          <div className="max-w-[1288px] h-screen 480:h-auto px-[20px] py-[105px] 480:pb-[0] 480:pt-[170px] mx-auto relative">
            <div className="flex flex-col 480:flex-row 480:flex-wrap gap-[33px] mt-[36px]">
              <GreenBlock text='Исследуйте Австралию'/>
              <GreenBlock text='Исследуйте Австралию'/>
              <GreenBlock text='Исследуйте Австралию'/>   
            </div>             
            <Image src='/images/fon-mobile.jpg' alt="" width={600} height={298} className="absolute top-0 left-0 w-full h-full object-cover z-[-1] 480:hidden"/>        
          </div>
        </div>

        <div className="max-w-[1288px] mx-auto px-[20px]">
          <Slider />

          <h1 className="mt-[110px] text-[32px] 450:text-[48px] leading-[35px] 450:leading-[59px] font-medium">Исследуйте то, <br/>что вам нужно.</h1>
          <SliderSecond />

          <div className="block 680:hidden">
            <SliderThree />
          </div>          

          <BlockInfo />

          <div className="mt-[109px]">
            <div className="flex flex-wrap gap-8 justify-between 450:w-[90%] items-center">
                <h1 className="text-[25px] 450:text-[40px] w-[444px] font-bold 450:leading-[56px]">Мы облегчаем работу арендаторам и арендодателям.</h1>
                <p className="text-[14px] 450:text-[16px] 450:w-[400px] leading-[25px]">Независимо от того, продаете ли вы свой текущий дом, получаете финансирование или покупаете новый, мы делаем это просто и эффективно. Что самое приятное? с нашими услугами вы сэкономите кучу денег и времени.</p>
            </div>
            <WhiteBlocks />
          </div>
        </div>

        <div className="w-full mx-auto border-t-[1.5px] pt-[64px] mt-[65px] border-[#4E6F54]">
          <div className="w-full max-w-[1238px] mx-auto px-[50px] 1238:px-[0px] flex flex-wrap gap-[50px] 950:gap-0 950:flex-nowrap items-center justify-center">
            <NumberBlock number="7.4%" text="Коэффициент возврата недвижимости"/>      
            <div className="w-[1.5px] bg-white h-[64px] mx-[100px] hidden 950:block"></div>      
            <NumberBlock number="3,856" text="Недвижимость на продажу и в аренду"/>       
            <div className="w-[1.5px] bg-white h-[64px] mx-[100px] hidden 950:block"></div>     
            <NumberBlock number="2,540" text="Ежедневные завершенные транзакции"/>            
          </div>
        </div>

        <InfoUserForm />
    </main>
    
  );
}
