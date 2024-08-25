import Link from 'next/link';
import React from 'react';

export default function FooterHref ({title, href = "#"}: {title: string, href?: string}) {
    return (
        <Link className='text-[21px]' href={href}>{title}</Link>
    )
}