import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';
import HomeThumb from '../components/home-thumb';
import Nav from '../components/nav';
import ReactMarkdown from 'react-markdown'
import PriceDifference from '../components/PriceDifference';
import PlotVariantSample from '../components/PlotVariantSample';
import Money from '../components/Money';
import Breadcrumb from '../components/Breadcrumb';
import RequestSuccessMessage from '../components/RequestSuccessMessage';

export default function PlotterDrawing(props) {

    let [selectedImage, setSelectedImage] = useState(props.img.data.attributes.formats.large);
    let [selectedVariant, setSelectedVariant] = useState(props.variant[0]);
    let mintIDRef = useRef();
    let ethAddressRef = useRef();
    let emailRef = useRef();
    let [status, setStatus] = useState('idle');

    // const submitPlotRequest = (e) => {
    //     e.preventDefault();
    //     const email = emailRef.current.value;
    //     const mintID = mintIDRef.current.value;
    //     const ethAddress = ethAddressRef.current.value;
    //     const SKU = selectedVariant.sku;


    // }
    const submitRequest = async (e) => {
        e.preventDefault();
        setStatus('loading');
        const user_email = emailRef.current.value;
        const mint_id = mintIDRef.current.value;
        const eth_address = ethAddressRef.current.value;
        const product = 'plot_' + selectedVariant.sku;
        const body = { user_email, mint_id, eth_address, product }
        const response = await fetch('/api/placeUnverifiedOrder',
            {
                method: 'post',
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' }
            });
        const data = await response.json();
        console.log('request complete', data);
        setStatus('success');
    }

    return (
        <>
            <Head>
                <title>{props.title} / Lostpixels</title>
                <meta name="description" content={props.long_description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Breadcrumb crumbs={[{ title: 'SHOP', url: '/shop' }]} />

            <div className='col-start-2 col-span-10 md:col-start-3 md:col-span-4 mb-8'>
                <img className="border border-slate-100" src={selectedImage.url} width={selectedImage.width} height={selectedImage.height} />
            </div>

            <div className='col-start-2 col-span-10 md:col-start-7 md:col-span-4 mb-16 ml-4'>
                <h1 className='font-primary text-4xl md:text-5xl'>{props.title}</h1>
                <Money className="block text-pop font-primary text-3xl mb-6" price={selectedVariant.price} />
                <div className="mb-6 prose prose-li:mb-0 prose-li:mt-0 prose-p:my-0 prose-ul:my-0">
                    <ReactMarkdown>{props.specs}</ReactMarkdown>
                </div>

                {status === 'success' &&
                    <RequestSuccessMessage />
                }
                {status === 'idle' &&
                    <form onSubmit={submitRequest} className={status === 'loading' ? 'opacity-40 pointer-events-none' : ''}>
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
                }
            </div>

            <div className='prose col-start-2 col-span-10 md:col-start-3 md:col-span-8 mb-16 max-w-full prose-headings:font-primary prose-headings:font-normal prose-headings:md:text-5xl prose-headings:mb-4'>
                <ReactMarkdown>{props.long_description}</ReactMarkdown>
            </div>
            <div className='col-start-2 col-span-10 md:col-start-3 md:col-span-8 mb-16 max-w-full'>
                <h3 className='font-primary text-4xl mb-4'>Choosing a Style</h3>
                <div className='md:flex'>
                    {props.variant.map(v => <PlotVariantSample key={v.sku} {...v} />)}
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://clownfish-app-f4hhn.ondigitalocean.app/api/plotter-drawing?populate=variant.img,img')
    const data = await res.json();

    return {
        props: data.data.attributes,
    }
}

