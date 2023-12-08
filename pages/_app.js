// import '../styles/global.css'
import Head from 'next/head'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.7" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;700;900&display=swap" rel="stylesheet"></link>
        {/* <link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"></link> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}