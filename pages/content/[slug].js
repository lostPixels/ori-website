import Head from "next/head";

export default function ContentPage(props) {

    const d = props.attributes;
    return (<>
        <Head>
            <title>{d.title} / Lostpixels</title>
            <meta name="description" content={props.long_description} />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className='col-start-2 col-span-10 md:col-start-3 md:col-span-8'>
            <h1 className='font-primary text-2xl md:text-5xl mb-6'>{d.title}</h1>
            <p>{d.body}</p>
        </div>
    </>)
}



export async function getStaticProps(context) {

    let data = await fetch(`https://clownfish-app-f4hhn.ondigitalocean.app/api/contents/${context.params.slug}?populate=hero_image`);
    data = await data.json();
    return {
        props: data.data
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
    let data = await fetch('https://clownfish-app-f4hhn.ondigitalocean.app/api/contents');
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