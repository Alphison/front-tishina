import WhiteBlock from "./white-block";
import './style.css'

export default function WhiteBlocks() {
    return (
        <div className="flex gap-[32px] mt-[64px] overflow-x-scroll w-full whiteBlocks">
          <WhiteBlock src="/images/icon.svg" name="Find the best deal" description="Browse thousands of properties, save your favorites and set up search alerts so you don’t miss the best home deal!"/>
          <WhiteBlock src="/images/icon.svg" name="Find the best deal" description="Browse thousands of properties, save your favorites and set up search alerts so you don’t miss the best home deal!"/>
          <WhiteBlock src="/images/icon.svg" name="Find the best deal" description="Browse thousands of properties, save your favorites and set up search alerts so you don’t miss the best home deal!"/>
          <WhiteBlock src="/images/icon.svg" name="Find the best deal" description="Browse thousands of properties, save your favorites and set up search alerts so you don’t miss the best home deal!"/>
        </div>
    )
}