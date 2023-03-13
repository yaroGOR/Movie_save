import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      {/* <Head>
        <title>MovieLib</title>
        <meta name="description" content="Save your favourite movie in one place" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Head/>
      <body className='h-screen bg-gradient-to-r from-gray-100 to-gray-300'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
