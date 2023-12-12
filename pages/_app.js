import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <html lang="en" />
        <meta charset="utf-8" />
        <title>Web3 Gradient text generator</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="favicon.ico" />
        

        <meta name="title" content="Web3 Gradient text generator" />
        <meta
          name="description"
          content="Web3 Gradient text generator"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mateo perez" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="web3textgradientgenerator.vercel.app" />
        <meta property="og:title" content="Web3 Gradient text generator" />
        <meta
          property="og:description"
          content="Web3 Gradient text generator"
        />
        <meta property="og:image" content="web3textgradientgenerator.vercel.app/thumb.png" />


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="web3textgradientgenerator.vercel.app" />
        <meta property="twitter:title" content="Web3 Gradient text generator" />
        <meta
          property="twitter:description"
          content="Web3 Gradient text generator"
        />
        <meta
          property="twitter:image"
          content="web3textgradientgenerator.vercel.app/thumb.png"
        />


      
      </Head>

      <Component {...pageProps} />
    </div>);
}

export default MyApp