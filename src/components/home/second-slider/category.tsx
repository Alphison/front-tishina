export default function Category({text, status}: {text: string, status: boolean}){
    return (
        <div className={`cursor-pointer text-[22px] font-semibold px-[19px] pb-[30px] ${status ? 'border-b' : 'border-none'} ${status ? 'text-white' : 'text-[#595959]'}`}>
            {text}
        </div>
    ) 
}