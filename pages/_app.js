// import '../styles/global.css'
import Head from 'next/head'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.7" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}