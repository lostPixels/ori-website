import Link from "next/link";

export default function BasicProductTile(props) {

    console.log(props)
    const d = props.attributes;

    const destinationURL = `${props.baseSlug}/${d.slug}`;
    return (
        <Link href={destinationURL} className="basis-full md:basis-1/2 lg:basis-1/3 p-2 mb-8">
            <figure className="mb-4">
                <img className="border border-slate-100 hover:border-slate-400" src={d.hero_image.data.attributes.formats.medium.url} width={392} height={522} />
            </figure>
            <figcaption>
                <h3 className="font-primary">{d.title}</h3>
                <span className="hover:text-pop">Shop →</span>
            </figcaption>
        </Link>
    )
}