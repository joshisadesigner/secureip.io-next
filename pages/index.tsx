import Head from "next/head";
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>Welcome to SECURE IP!</div>
    </Layout>
  )
}