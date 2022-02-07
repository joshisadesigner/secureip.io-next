import Head from "next/head";
import Layout, { siteTitle } from '../components/layout';
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout home>
        <Navbar />
        <main />
        <Footer />
      </Layout>
    </>
  )
}