import Image from "next/image"
import React from "react"

export default function BlockInfo () {
    return (
        <div className="mt-[95px] 680:grid grid-column-2 gap-[20px] hidden">
            <div className="col-span-2 rounded-[30px] overflow-hidden relative p-[25px] 400:p-[60px]">
              <Image className="absolute object-cover top-0 left-0 w-full h-full z-[-1]" src="/images/homeImage.jpg" width={1240} height={601} alt=""/>
              <div className="bg-black bg-opacity-[0.2] z-[-1] absolute top-0 left-0 w-full h-full"></div>
              <div className="">
                <p className="text-[16px] font-bold tracking-[5px]">МЕСТНЫЕ СПОСОБЫ</p>
                <h1 className="400:leading-[52px] max-w-[500px] text-[16px] 400:text-[30px] 650:text-[50px] font-extrabold mt-[19px]">10 скандинавских домов с безупречным дизайном.</h1>
              </div>
              <p className="max-w-[649px] mt-[112px] font-semibold leading-[40px] text-[20px]">Независимо от того, продаете ли вы свой текущий дом, получаете финансирование или покупаете новый, мы делаем это просто и эффективно. Что самое приятное? с нашими услугами вы сэкономите кучу денег и времени.</p>
            </div>
            <div className="col-span-2 800:col-span-1 rounded-[30px] overflow-hidden relative p-[25px] 400:p-[60px]">
              <Image className="absolute object-cover w-full h-full top-0 left-0 z-[-1]" src="/images/homeImage2.jpg" width={610} height={468} alt=""/>
              <div className="bg-black bg-opacity-[0.2] absolute top-0 left-0 w-full h-full z-[-1]"></div>
              <div className="">
                <p className="text-[13px] font-bold tracking-[5px]">УНИКАЛЬНЫЕ ДОМА</p>
                <h1 className="400:leading-[37px] max-w-[350px] text-[16px] 400:text-[25px] 650:text-[34px] font-extrabold mt-[23px]">Собирайте произведения искусства вместе с нашими гидами.</h1>
              </div>
              <p className="max-w-[406px] mt-[112px] font-semibold leading-[25px] text-[16px]">Независимо от того, продаете ли вы свой текущий дом, получаете финансирование или покупаете новый, мы делаем это просто и эффективно. Что самое приятное? с нашими услугами вы сэкономите кучу денег и времени.</p>
            </div>
            <div className="col-span-2 800:col-span-1 rounded-[30px] overflow-hidden relative p-[25px] 400:p-[60px]">
              <Image className="absolute object-cover w-full h-full top-0 left-0 z-[-1]" src="/images/homeImage3.jpg" width={610} height={468} alt=""/>
              <div className="bg-black bg-opacity-[0.2] absolute top-0 left-0 w-full h-full z-[-1]"></div>
              <div className="">
                <p className="text-[13px] font-bold tracking-[5px]">ОСТАВАЙСЯ ДОМА</p>
                <h1 className="400:leading-[37px] max-w-[350px] text-[16px] 400:text-[25px] 650:text-[34px] font-extrabold mt-[23px]">Самый дешевый способ снять лучший дом.</h1>
                <p className="mt-[20px] text-[17px] font-medium">Начиная с 20$ на человека.</p>
              </div>
              <p className="max-w-[406px] mt-[93px] font-semibold leading-[25px] text-[16px]">Независимо от того, продаете ли вы свой текущий дом, получаете финансирование или покупаете новый, мы делаем это просто и эффективно. Что самое приятное? с нашими услугами вы сэкономите кучу денег и времени.</p>
            </div>
          </div>
    )
}