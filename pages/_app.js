import Head from 'next/head'
import Nav from '../components/nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>

    </Head>
    <Nav />
    <main className="grid grid-cols-12 gap-4 max-w-7xl m-auto pt-6 md:pt-24">
      <Component {...pageProps} />
    </main>
  </>
}

export default MyApp
