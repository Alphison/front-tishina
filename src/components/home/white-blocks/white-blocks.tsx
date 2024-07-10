import WhiteBlock from "./white-block";
import './style.css'

export default function WhiteBlocks() {
    return (
        <div className="flex gap-[17px] 600:gap-[32px] mt-[30px] 600:mt-[64px] pb-[10px] overflow-x-scroll w-full whiteBlocks">
          <WhiteBlock src="/images/Icon.svg" name="Найдите лучшее предложение" description="Просматривайте тысячи объектов недвижимости, сохраняйте избранное и настраивайте оповещения о поиске, чтобы не пропустить лучшее предложение по продаже жилья!"/>
          <WhiteBlock src="/images/Icon.svg" name="Найдите лучшее предложение" description="Просматривайте тысячи объектов недвижимости, сохраняйте избранное и настраивайте оповещения о поиске, чтобы не пропустить лучшее предложение по продаже жилья!"/>
          <WhiteBlock src="/images/Icon.svg" name="Найдите лучшее предложение" description="Просматривайте тысячи объектов недвижимости, сохраняйте избранное и настраивайте оповещения о поиске, чтобы не пропустить лучшее предложение по продаже жилья!"/>
          <WhiteBlock src="/images/Icon.svg" name="Найдите лучшее предложение" description="Просматривайте тысячи объектов недвижимости, сохраняйте избранное и настраивайте оповещения о поиске, чтобы не пропустить лучшее предложение по продаже жилья!"/>
        </div>
    )
}