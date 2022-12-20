import Image from "next/image";

const HomeThumb = props => {

    return (
        <div className={`${props.className} border border-slate-100 m-4`}>
            <img src={props.attributes.formats.medium.url} width={392} height={522} />
        </div>
    )
}

export default HomeThumb;