import Head from "next/head";
import { CldImage } from 'next-cloudinary';
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Contact(props) {

    const d = props.attributes;
    console.log(d)

    return (<>
        <Head>
            <title>{d.title} / Lostpixels</title>
            <meta name="description" content={props.long_description} />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className='col-start-2 col-span-10 md:col-start-3 md:col-span-8'>
            <h1 className='font-primary text-2xl md:text-5xl mb-6'>{d.title}</h1>
            <div className="flex">
                <div className="prose prose-ul:list-none prose-ul:p-0 pr-12">
                    <ReactMarkdown>
                        {d.body}
                    </ReactMarkdown>
                </div>
                <div className="hidden md:block">
                    <CldImage
                        className="object-contain"
                        width="700"
                        height="379"
                        crop='fill'
                        src={d.photo.data.attributes.hash}
                        sizes="100vw"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </>

    )
}

export async function getStaticProps(context) {

    let data = await fetch(`https://clownfish-app-f4hhn.ondigitalocean.app/api/contact?populate=photo`);
    data = await data.json();

    return {
        props: data.data
    }
}