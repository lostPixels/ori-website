import Head from 'next/head'
import Nav from '../components/nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>

    </Head>
    <Nav />
    <Component {...pageProps} />
  </>
}

export default MyApp
