import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import HomeThumb from '../components/home-thumb';
import Nav from '../components/nav';

export default function Home(props) {

    let [images, setImages] = useState([]);
    useEffect(() => {
        let top3 = shuffle([...props.featured_images.data]);
        setImages(top3.slice(0, 3));
    }, [props.featured_images.data])
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <div className='flex col-start-1 col-span-12 mb-8'>
                {images.map(img => <HomeThumb key={img.id} {...img} className='flex-1' />)}
            </div>

            <div className='flex col-start-3 col-span-8'>
                <p>{props.introduction}</p>
            </div>


        </>
    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://clownfish-app-f4hhn.ondigitalocean.app/api/home?populate=*')
    const data = await res.json();

    return {
        props: data.data.attributes,
    }
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

