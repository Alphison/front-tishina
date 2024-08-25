import { IMaskMixin } from 'react-imask';

const PhoneInput = IMaskMixin(({inputRef, ...props}) => (
    <input
     type="text"     
     placeholder="Номер"
     className="w-full outline-none text-[18px] px-[16px] py-[27px] rounded-[8px] placeholder:text-[16px] text-black font-medium"
     {...props}
    //  ref={inputRef}
    />
));

export default PhoneInput