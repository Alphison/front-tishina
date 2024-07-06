import WhiteBlock from "./white-block";
import './style.css'

export default function WhiteBlocks() {
    return (
        <div className="flex gap-[17px] 600:gap-[32px] mt-[30px] 600:mt-[64px] pb-[10px] overflow-x-scroll w-full whiteBlocks">
          <WhiteBlock src="/images/Icon.svg" name="Find the best deal" description="Browse thousands of properties, save your favorites and set up search alerts so you don’t miss the best home deal!"/>
          <WhiteBlock src="/images/Icon.svg" name="Find the best deal" description="Browse thousands of properties, save your favorites and set up search alerts so you don’t miss the best home deal!"/>
          <WhiteBlock src="/images/Icon.svg" name="Find the best deal" description="Browse thousands of properties, save your favorites and set up search alerts so you don’t miss the best home deal!"/>
          <WhiteBlock src="/images/Icon.svg" name="Find the best deal" description="Browse thousands of properties, save your favorites and set up search alerts so you don’t miss the best home deal!"/>
        </div>
    )
}