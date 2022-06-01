import React from 'react'

import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'

import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log('script loaded correctly, window.FB has been populated')
          }
        />
      </Head>
      <h1>First Posta</h1>
      <h2>
        <Link href="/">
          <a>Back to homee</a>
        </Link>
      </h2>
    </Layout>
  )
}
