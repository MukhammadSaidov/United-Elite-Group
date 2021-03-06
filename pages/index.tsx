import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../src/components/Layout/Layout'
import Landing from '../src/containers/Landing/Landing'


const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Landing/>
      </Layout>

    </div>
  )
}

export default Home
