export default function Category({text, status}: {text: string, status: boolean}){
    return (
        <div className={`cursor-pointer text-nowrap text-[15px] 450:text-[22px] hover:text-white transition-colors font-semibold px-[19px] pb-[30px] ${status ? 'border-b' : 'border-none'} ${status ? 'text-white' : 'text-[#595959]'}`}>
            {text}
        </div>
    ) 
}