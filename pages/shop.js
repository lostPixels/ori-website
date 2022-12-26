import Head from 'next/head'
import ProductThumbnail from '../components/ProductThumbnail';


export default function Shop(props) {

    return (
        <>
            <Head>
                <title>SHOP / Lostpixels</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='col-start-3 col-span-8 mb-8'>
                <h1 className='font-primary text-2xl md:text-5xl mb-6'>{props.shop.title}</h1>
                <p>{props.shop.description}</p>
            </div>

            <div className='flex flex-wrap col-start-3 col-span-8 mb-8'>
                {props.productData.map((p, i) => <ProductThumbnail key={i} {...p} />)}
            </div>
        </>
    )
}

export async function getStaticProps() {

    let shopData = await fetch('https://clownfish-app-f4hhn.ondigitalocean.app/api/shop?populate=*');
    shopData = await shopData.json();


    const products = ['plotter-drawing', 'nft-bound-print', 'open-edition-prints-master', 'rough-cut-drawings-master']
    let i = 0;

    let productData = [];
    while (i < products.length) {
        let slug = products[i];
        try {
            const res = await fetch(`https://clownfish-app-f4hhn.ondigitalocean.app/api/${slug}?populate=*`);
            const data = await res.json();
            productData.push({ ...data, slug });
        }
        catch (e) {
            console.warn(`Error Loading ${slug}`)
        }

        i++;
    }

    productData = productData.filter(d => !d.error);

    return {
        props: {
            shop: { ...shopData.data.attributes },
            productData
        }
    }
}