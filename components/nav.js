import Image from 'next/image';
import Link from 'next/link'

const Nav = props => (
    <nav role='navigation' className='flex justify-between items-center bg-white py-2 border-b border-neutral-200 px-12'>

        <div className="basis-1/6">
            <Link href="/">
                <img src="https://res.cloudinary.com/dtz3cezyb/image/upload/c_scale,w_80/v1671479069/Ori_Logo_2x_ranayy.png" srcSet='https://res.cloudinary.com/dtz3cezyb/image/upload/c_scale,w_80/v1671479069/Ori_Logo_2x_ranayy.png 1x. https://res.cloudinary.com/dtz3cezyb/image/upload/c_scale,w_160/v1671479069/Ori_Logo_2x_ranayy.png 2x' width={80} height={44} alt="ORI Project Logo" />
                <span className='sr-only'>Home</span>
            </Link>
        </div>
        <div className='flex justify-center flex-grow basis-1/3'>
            <Link className='mx-6 font-primary text-xl block hover:text-pop' href="/about">About</Link>
            <Link className='mx-6 font-primary text-xl block hover:text-pop' href="/shop">Shop</Link>
            <Link className='mx-6 font-primary text-xl block hover:text-pop' href="/press">Press</Link>
            <Link className='mx-6 font-primary text-xl block hover:text-pop' href="/contact">contact</Link>
        </div>
        <div className='flex basis-1/6 justify-end'>
            <a className='px-2' href="https://opensea.io/collection/ori-by-james-merrill-1" target="_blank" rel="noreferrer">
                <Image src='/opensea.svg' width={20} height={20} alt="Opensea Logo" />
                <span className='sr-only'>OpenSea</span>
            </a>
            <a className='px-2' href="https://www.artblocks.io/collections/curated/projects/0x99a9b7c1116f9ceeb1652de04d5969cce509b069/379" target="_blank" rel="noreferrer">
                <Image src='/artblocks-logo.png' width={20} height={20} alt="Artblocks Logo" />
                <span className='sr-only'>Artblocks</span></a>
        </div>
    </nav>
)

export default Nav;