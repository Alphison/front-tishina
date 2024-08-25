import Link from 'next/link';
import React from 'react';

export default function FooterHref2 ({title, href = "#"}: {title: string, href?: string}) {
    return (
        <Link className='text-[18px] border-b border-white' href={href}>{title}</Link>
    )
}