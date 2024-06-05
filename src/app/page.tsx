import Slider from "@/components/home/first-slider/slider";
import GreenBlock from "@/components/home/green-block";
import NumberBlock from "@/components/home/number-block";
import SliderSecond from "@/components/home/second-slider/slider";
import WhiteBlocks from "@/components/home/white-blocks/white-blocks";
import Image from "next/image";

export default function Home() {
  return (
    <main>
        <div className="w-full 1238:max-w-[1238px] mx-auto px-[50px]">

          <div className="flex flex-wrap gap-[33px] mt-[65px]">
            <GreenBlock text='Explore Australia'/>
            <GreenBlock text='Explore Australia'/>
            <GreenBlock text='Explore Australia'/>
          </div>

          <Slider />

          <h1 className="mt-[110px] text-[48px] leading-[59px] font-medium">Explore where<br/>you want.</h1>
          <SliderSecond />

          <div className="mt-[95px] grid grid-column-2 gap-[20px]">
            <div className="col-span-2 rounded-[30px] overflow-hidden relative">
              <Image src="/images/homeImage.jpg" width={1240} height={601} alt=""/>
              <div className="bg-black bg-opacity-[0.2] absolute top-0 left-0 w-full h-full"></div>
              <div className="absolute top-[60px] left-[60px]">
                <p className="text-[16px] font-bold tracking-[5px]">LOCAL WAYS</p>
                <h1 className="leading-[52px] w-[40%] text-[50px] font-extrabold mt-[19px]">10 Scandinavian homes with flawless designs.</h1>
              </div>
              <button className="bg-white text-black font-semibold hover:text-white hover:bg-[#4E6F54] transition-all duration-300 hover:scale-[1.1] rounded-[10px] py-[18px] px-[28px] absolute bottom-[60px] left-[60px]">Read local guides</button>
            </div>
            <div className="rounded-[30px] overflow-hidden relative">
              <Image src="/images/homeImage2.jpg" width={610} height={468} alt=""/>
              <div className="bg-black bg-opacity-[0.2] absolute top-0 left-0 w-full h-full"></div>
              <div className="absolute top-[60px] left-[60px]">
                <p className="text-[13px] font-bold tracking-[5px]">UNIQUE HOMES</p>
                <h1 className="leading-[37px] w-[60%] text-[34px] font-extrabold mt-[23px]">Collect piece of art with our guides.</h1>
              </div>
              <button className="bg-white text-black font-semibold hover:text-white hover:bg-[#4E6F54] transition-all duration-300 hover:scale-[1.1] rounded-[10px] py-[18px] px-[28px] absolute bottom-[60px] left-[60px]">Show all homies</button>
            </div>
            <div className="rounded-[30px] overflow-hidden relative">
              <Image src="/images/homeImage3.jpg" width={610} height={468} alt=""/>
              <div className="bg-black bg-opacity-[0.2] absolute top-0 left-0 w-full h-full"></div>
              <div className="absolute top-[60px] left-[60px]">
                <p className="text-[13px] font-bold tracking-[5px]">STAY AT HOME</p>
                <h1 className="leading-[37px] w-[60%] text-[34px] font-extrabold mt-[23px]">Cheapest way to rent a best home.</h1>
                <p className="mt-[20px] text-[17px] font-medium">Starting from $20 per person.</p>
              </div>
              <button className="bg-white text-black font-semibold hover:text-white hover:bg-[#4E6F54] transition-all duration-300 hover:scale-[1.1] rounded-[10px] py-[18px] px-[28px] absolute bottom-[60px] left-[60px]">Best price for rents</button>
            </div>
          </div>

          <div className="mt-[109px]">
            <div className="flex flex-wrap justify-between w-[90%] items-center">
                <h1 className="text-[40px] w-[444px] font-bold leading-[56px]">We make it easy for tenants and landlords.</h1>
                <p className="text-[16px] w-[400px] leading-[25px]">Whether it’s selling your current home, getting financing, or buying a new home, we make it easy  and efficient. The best part? you’ll save a bunch of money and time with our services.</p>
            </div>
            <WhiteBlocks />
          </div>
        </div>

        <div className="w-full mx-auto border-t-[1.5px] pt-[64px] mt-[65px] border-[#4E6F54]">
          <div className="w-full max-w-[1238px] mx-auto px-[50px] 1238:px-[0px] flex items-center justify-center">
            <NumberBlock number="7.4%" text="Property Return Rate"/>      
            <div className="w-[1.5px] bg-white h-[64px] mx-[100px]"></div>      
            <NumberBlock number="3,856" text="Property in Sell & Rent"/>       
            <div className="w-[1.5px] bg-white h-[64px] mx-[100px]"></div>     
            <NumberBlock number="2,540" text="Daily Completed Transactions"/>            
          </div>
        </div>

        <div className="w-full mt-[190px] bg-[#4E6F54] pt-[64px] pb-[80px]">
          <div className="w-full max-w-[1238px] mx-auto px-[50px] 1238:px-[0px] flex flex-col items-center text-center">
            <p className="text-[24px] font-bold">No Spam Promise</p>
            <p className="text-[40px] font-bold leading-[56px]">Are you a landlord?</p>
            <p className="mt-[16px] text-[16px]">Discover ways to increase your home's value and  get listed. No Spam.</p>
            <form action="" method="post" className="flex items-center justify-between bg-white rounded-[8px] p-[16px] max-w-[543px] w-full mt-[32px]">
              <input type="text" placeholder="Enter your email address" className="outline-none text-[18px] text-black font-medium"/>
              <button className="py-[12px] px-[40px] rounded-[8px] font-bold text-[16px] bg-[#4E6F54] hover:bg-[#638a6a] hover:scale-[0.9] transition-all duration-300">Submit</button>
            </form>
            <p className="mt-[24px] text-[14px] font-medium">Join 10,000+ other landlords in our estatery community.</p>
          </div>
        </div>
    </main>
    
  );
}
