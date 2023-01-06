import Head from "next/head";
import { CldImage } from 'next-cloudinary';
import Link from "next/link";

const formatTheDate = str => {
    return new Date(str).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })
}
export default function Press(props) {

    const d = props.attributes;

    return (<>
        <Head>
            <title>{d.title} / Lostpixels</title>
            <meta name="description" content={props.long_description} />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className='col-start-2 col-span-10 md:col-start-3 md:col-span-8'>
            <h1 className='font-primary text-2xl md:text-5xl mb-6'>{d.title}</h1>
            <ul className="pt-12">
                {d.Press.map(item => {
                    return (<li key={item.id} >
                        <Link className='flex mb-12' href={item.link} target="_blank">
                            <CldImage
                                className="object-contain w-24 md:w-52"
                                width="219"
                                height="110"
                                crop='pad'
                                src={item.thumbnail.data.attributes.hash}
                                sizes="100vw"
                                alt=""
                            />
                            <div className="flex flex-col justify-center flex-1">
                                <h3 className="text-2xl">{item.title}</h3>
                                <span className="">{formatTheDate(item.release_date)}</span>
                                <span className="font-bold hover:text-pop">Check it out→</span>
                            </div>
                        </Link>
                    </li>)
                })}
            </ul>
        </div>
    </>)
}


export async function getStaticProps(context) {

    let data = await fetch(`https://clownfish-app-f4hhn.ondigitalocean.app/api/press?populate=Press,Press.thumbnail`);
    data = await data.json();
    return {
        props: data.data
    }
}