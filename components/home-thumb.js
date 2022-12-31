import Image from "next/image";
import { useEffect, useState } from "react";

const HomeThumb = props => {

    const [cn, setCN] = useState('opacity-0');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        let int = requestAnimationFrame(() => setCN(''));
        return () => cancelAnimationFrame(int)
    });

    return (
        <div className={`${props.className} border border-slate-100 m-1 md:m-4 transition ease-in-out delay-${props.index * 100} duration-1000 ${cn}`}>
            <img src={props.attributes.formats.medium.url} width={392} height={522} onLoad={() => setLoaded(true)} />
        </div>
    )
}

export default HomeThumb;