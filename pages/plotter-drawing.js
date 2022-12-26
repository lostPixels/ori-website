import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';
import HomeThumb from '../components/home-thumb';
import Nav from '../components/nav';
import ReactMarkdown from 'react-markdown'
import PriceDifference from '../components/PriceDifference';

export default function PlotterDrawing(props) {

    let [selectedImage, setSelectedImage] = useState(props.img.data.attributes.formats.large);
    let [selectedVariant, setSelectedVariant] = useState(props.variant[0]);
    let mintIDRef = useRef();
    let ethAddressRef = useRef();
    let emailRef = useRef();

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const submitPlotRequest = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const mintID = mintIDRef.current.value;
        const ethAddress = ethAddressRef.current.value;
        const SKU = selectedVariant.sku;
        console.log(email, mintID, ethAddress, SKU)
    }


    return (
        <>
            <Head>
                <title>{props.title} / Lostpixels</title>
                <meta name="description" content={props.long_description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='col-start-3 col-span-4 mb-8'>
                <img className="border border-slate-100" src={selectedImage.url} width={selectedImage.width} height={selectedImage.height} />
            </div>

            <div className='col-start-7 col-span-4 mb-8 ml-4'>
                <h1 className='font-primary text-2xl md:text-5xl'>{props.title}</h1>
                <span className='block text-pop font-primary text-3xl mb-6'>{formatter.format(selectedVariant.price)}</span>
                <div className="mb-6 prose prose-li:mb-0 prose-li:mt-0 prose-p:my-0 prose-ul:my-0">
                    <ReactMarkdown>{props.specs}</ReactMarkdown>
                </div>

                <form onSubmit={submitPlotRequest}>
                    <fieldset className='block mb-4'>
                        <legend className='font-bold'>Style</legend>
                        {props.variant.map((v, i) =>
                            <label key={v.sku} className="block">
                                <input className="" type="radio" name="radio" value={v.sku} defaultChecked={i === 0} onClick={() => setSelectedVariant(props.variant[i])} /> {v.title} <PriceDifference current={selectedVariant.price} new={v.price} />
                            </label>)}
                    </fieldset>
                    <label className='block mb-4'><span className='block font-bold'>Your Email</span>
                        <input className='block bg-white border border-slate-400 w-full h-9 p-1' name="email" placeholder='You@aol.com' required ref={emailRef} type="email" />
                    </label>
                    <label className='block mb-4'><span className='block font-bold'>Mint Number</span>
                        <input className='block bg-white border border-slate-400 w-full h-9 p-1' name="mint_number" placeholder='100' required ref={mintIDRef} />
                    </label>
                    <label className='block mb-4'><span className='block font-bold'>Owner Ethereum Address</span>
                        <input className='block bg-white border border-slate-400 w-full h-9 p-1' name="mint_number" placeholder='0xC3B212da1F50DE8eCAE59C932e36DF7aFb6319cW' required ref={ethAddressRef} />
                    </label>

                    <button className='block bg-cool transition-all hover:bg-cool-pop text-white w-full h-11 font-bold tracking-wide'>REQUEST</button>

                </form>


            </div>
        </>
    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://clownfish-app-f4hhn.ondigitalocean.app/api/plotter-drawing?populate=*')
    const data = await res.json();

    return {
        props: data.data.attributes,
    }
}

