import Link from "next/link";
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'

const ProductThumbnail = props => {

    const d = props.data.attributes;


    let [price, setPrice] = useState(0);

    useEffect(() => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        setPrice(formatter.format(d.price));
    }, [d.price])

    let destinationURL = d.collection_slug ? `/${d.collection_slug}` : `/${props.slug}`;
    return (
        <Link href={destinationURL} className="basis-full md:basis-1/2 lg:basis-1/3 p-2 mb-8">
            <figure className="mb-4">
                <img className="border border-slate-100 hover:border-slate-400" src={d.img.data.attributes.formats.medium.url} width={392} height={522} />
            </figure>
            <figcaption>
                <h3 className="font-primary text-2xl">{d.title}</h3>
                <p className="font-primary text-pop mb-4">{price} {props.slug === 'plotter-drawing' || props.slug === 'rough-cut-drawings-master' ? '++' : ''}</p>
                <div className="mb-6 prose prose-li:mb-0 prose-li:mt-0 prose-p:my-0 prose-ul:my-0">
                    <ReactMarkdown>{d.short_description}</ReactMarkdown>
                </div>
                <span className="hover:text-pop">Shop →</span>

            </figcaption>
        </Link>
    )
}

export default ProductThumbnail;