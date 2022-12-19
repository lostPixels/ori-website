import Image from 'next/image';
import Link from 'next/link'
import { useState } from 'react';

const Nav = props => {

    const [open, setOpen] = useState(false);

    return (
        <nav role='navigation' className='bg-white md:py-2 border-b border-neutral-200 md:px-12'>

            <div className='flex md:hidden p-4 flex-grow relative'>
                <Image src='/hamburger.svg' width={20} height={18} alt="Open Mobile Nav" aria-hidden onClick={() => setOpen(!open)} />
                <Link href="/" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <img src="https://res.cloudinary.com/dtz3cezyb/image/upload/c_scale,w_80/v1671479069/Ori_Logo_2x_ranayy.png" srcSet='https://res.cloudinary.com/dtz3cezyb/image/upload/c_scale,w_80/v1671479069/Ori_Logo_2x_ranayy.png 1x' width={40} height={22} alt="ORI Project Logo" />
                    <span className='sr-only'>Home</span>
                </Link>
            </div>
            <div className={`${!open ? 'hidden' : 'flex'} fixed md:static md:flex-row bg-white md:bg-transparent w-1/2 md:w-auto h-full top-0 left-0 z-20 md:z-auto md:flex md:justify-between md:items-center flex-col items-start justify-start`}>
                <div className="basis-1/6 hidden md:block">
                    <Link href="/">
                        <img src="https://res.cloudinary.com/dtz3cezyb/image/upload/c_scale,w_80/v1671479069/Ori_Logo_2x_ranayy.png" srcSet='https://res.cloudinary.com/dtz3cezyb/image/upload/c_scale,w_80/v1671479069/Ori_Logo_2x_ranayy.png 1x. https://res.cloudinary.com/dtz3cezyb/image/upload/c_scale,w_160/v1671479069/Ori_Logo_2x_ranayy.png 2x' width={80} height={44} alt="ORI Project Logo" />
                        <span className='sr-only'>Home</span>
                    </Link>
                </div>
                <div className='flex md:justify-center flex-grow md:basis-1/3 flex-col pt-12 md:flex-row md:p-0'>
                    <Link className='md:hidden mx-6 font-primary text-xl block hover:text-pop p-2 md:p-0' href="/">Home</Link>
                    <Link className='mx-6 font-primary text-xl block hover:text-pop p-2 md:p-0' href="/about">About</Link>
                    <Link className='mx-6 font-primary text-xl block hover:text-pop p-2 md:p-0' href="/shop">Shop</Link>
                    <Link className='mx-6 font-primary text-xl block hover:text-pop p-2 md:p-0' href="/press">Press</Link>
                    <Link className='mx-6 font-primary text-xl block hover:text-pop p-2 md:p-0' href="/contact">contact</Link>
                </div>
                <div className='flex md:basis-1/6 md:justify-end self-center pb-6 md:pb-0'>
                    <a className='px-2' href="https://opensea.io/collection/ori-by-james-merrill-1" target="_blank" rel="noreferrer">
                        <Image src='/opensea.svg' width={20} height={20} alt="Opensea Logo" />
                        <span className='sr-only'>OpenSea</span>
                    </a>
                    <a className='px-2' href="https://www.artblocks.io/collections/curated/projects/0x99a9b7c1116f9ceeb1652de04d5969cce509b069/379" target="_blank" rel="noreferrer">
                        <Image src='/artblocks-logo.png' width={20} height={20} alt="Artblocks Logo" />
                        <span className='sr-only'>Artblocks</span></a>
                </div>
            </div>
            <div className={`${!open ? 'hidden' : ''} md:hidden bg-black/40 fixed top-0 left-0 w-full h-screen z-10`} onClick={() => setOpen(!open)}></div>
        </nav>

    )
}

export default Nav;