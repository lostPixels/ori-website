import Head from 'next/head'
import Nav from '../components/nav'
import '../styles/globals.css'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>

    </Head>

    <Nav />
    <div className='main-wrap flex-grow'>
      <main className="grid grid-cols-12 gap-4 max-w-7xl m-auto pt-6 md:pt-12">
        <Component {...pageProps} />
      </main>
    </div>
    <Footer />
  </>
}

export default MyApp
