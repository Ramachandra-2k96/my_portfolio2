"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav =() => {
    const links = [
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/resume', label: 'Resume' },
        { href: '/work', label: 'Work' },
        { href: '/contact', label: 'Contact' },
    ];
 const pathname = usePathname();
    return (
        <nav className='flex gap-8'>
            {links.map((link, index) => (
                <Link key={index} href={link.href} className={`${pathname === link.href ? 'text-accent border-b-2 border-accent' : ''}`}>
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}
export default Nav;