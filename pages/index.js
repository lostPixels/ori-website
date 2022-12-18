import Head from 'next/head'
import Image from 'next/image'

export default function Home(props) {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='text-3xl font-bold underline'>
                {props.title}
            </main>

            <footer >

            </footer>
        </div>
    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://clownfish-app-f4hhn.ondigitalocean.app/api/home?populate=*')
    const data = await res.json();
    console.log(data)

    return {
        props: data.data.attributes,
    }
}

