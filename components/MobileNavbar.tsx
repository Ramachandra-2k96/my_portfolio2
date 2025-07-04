"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { CiMenuFries } from 'react-icons/ci';
import { useState } from 'react';

const Nav = () => {
    const links = [
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/resume', label: 'Resume' },
        { href: '/work', label: 'Work' },
        { href: '/contact', label: 'Contact' },
    ];
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className='flex justify-centre items-centre '>
                <CiMenuFries className='text-[32px] text-accent'/>
            </SheetTrigger>
            <SheetContent className='flex flex-col gap-3'>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className='mt-32 mb-40  text-center text-2xl'>
                    <Link href="/" onClick={handleLinkClick}>
                    <h1 className='text-4xl font-semibold'>logo <span className='text-accent'>.</span></h1></Link>
                </div>
                 <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index) => (
                        <Link 
                            key={index} 
                            href={link.href} 
                            className={`${pathname === link.href ? 'text-xl capitalize hover:text-accent transition-all border-b-2 border-accent' : ''}`}
                            onClick={handleLinkClick}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}
export default Nav;