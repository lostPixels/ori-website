import Head from "next/head";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Money from "../../components/Money";
import StripePrice from "../../components/StripePrice";

export default function OpenEditionPrint(props) {

    const selectedImage = props.hero_image.data.attributes.formats.large

    const submitRequest = () => {

    }
    return (
        <>
            <Head>
                <title>{props.title} / Lostpixels</title>
                <meta name="description" content={props.long_description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='col-start-2 col-span-10 md:col-start-3 md:col-span-4 mb-8'>
                <img className="border border-slate-100" src={selectedImage.url} width={selectedImage.width} height={selectedImage.height} />
            </div>

            <div className='col-start-2 col-span-10 md:col-start-7 md:col-span-4 mb-16 ml-4'>
                <h1 className='font-primary text-4xl md:text-5xl'>{props.title}</h1>
                <StripePrice id={props.stripe_product_id} className="block text-pop font-primary text-3xl mb-6" />
                <div className="mb-6 prose prose-li:mb-0 prose-li:mt-0 prose-p:my-0 prose-ul:my-0">
                    <ReactMarkdown>{props.specs}</ReactMarkdown>
                </div>

                <form action="/api/beginCheckout" method="POST">
                    <input type='hidden' id="product_id" name="product_id" value={props.stripe_product_id} />
                    <button className='block bg-cool transition-all hover:bg-cool-pop text-white w-full h-11 font-bold tracking-wide'>BUY NOW</button>
                </form>
            </div>

            <div className='prose col-start-2 col-span-10 md:col-start-3 md:col-span-8 mb-16 max-w-full prose-headings:font-primary prose-headings:font-normal prose-headings:md:text-5xl prose-headings:mb-4'>
                <ReactMarkdown>{props.long_description}</ReactMarkdown>
            </div>
        </>
    )
}


export async function getStaticProps(context) {

    let data = await fetch('https://clownfish-app-f4hhn.ondigitalocean.app/api/open-edition-prints?populate=*');
    data = await data.json();

    const product = data.data.filter(p => p.attributes.slug === context.params.slug);

    if (product.length > 0) {
        return {
            props: product[0].attributes
        }
    }
    else {
        return {
            props: {
                error: 'product_not_found'
            }
        }
    }
}

export async function getStaticPaths() {
    // When this is true (in preview environments) don't
    // prerender any static pages
    // (faster builds, but slower initial page load)
    if (process.env.SKIP_BUILD_STATIC_GENERATION) {
        return {
            paths: [],
            fallback: 'blocking',
        }
    }

    // Call an external API endpoint to get posts
    let data = await fetch('https://clownfish-app-f4hhn.ondigitalocean.app/api/open-edition-prints');
    data = await data.json();

    // Get the paths we want to prerender based on data
    // In production environments, prerender all pages
    // (slower builds, but faster initial page load)
    const paths = data.data.map((page) => ({
        params: { slug: page.attributes.slug },
    }))

    // { fallback: false } means other routes should 404
    return { paths, fallback: false }
}