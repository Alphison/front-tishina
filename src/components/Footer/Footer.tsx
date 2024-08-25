import React from 'react';
import FooterHref from './FooterHref/FooterHref';
import FooterHref2 from './FooterHref2/FooterHref2';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer () {
    return (
        <div className='py-[100px] flex flex-col gap-[53px] mt-[256px]'>
            <div className='grid 650:grid-cols-custom-layout px-[83px] gap-[20px]'>
                <div></div>
                <nav className='flex justify-center gap-[42px] items-center flex-wrap'>
                    <FooterHref title='ДОСТАВКА'/>
                    <FooterHref title='ВОЗВРАТ'/>
                    <FooterHref title='О НАС'/>
                    <FooterHref title='КОНТАКТЫ'/>
                    <FooterHref title='НАВЕРХ'/>
                </nav>
                <div className='flex justify-center 650:justify-end items-center gap-[15px]'>
                    <Link href="#"><Image width={30} height={30} alt='' src="/images/Facebook.svg"/></Link>
                    <Link href="#"><Image width={30} height={30} alt='' src="/images/Instagram.svg"/></Link>
                    <Link href="#"><Image width={30} height={30} alt='' src="/images/Twitter.svg"/></Link>
                </div>
            </div>
            <div className='flex justify-center align-center gap-[32px] flex-wrap px-[20px]'>
                <p>©2023, All right reserved.</p>
                <FooterHref2 title="Политика конфиденциальности"/>
                <FooterHref2 title="Публичная оферта"/>
                <FooterHref2 title="Cookies Settings"/>
            </div>
        </div>
    )
}