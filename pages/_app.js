import {useEffect} from "react";
import "../styles/main.scss";
import "../shared/font-awesome";
import Layout from "../components/layout";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    // Run code on client-side only : ensure document is here
    if (typeof document !== undefined) {
      // load JS bootstrap dependency
      require('bootstrap/dist/js/bootstrap')
    }
    // Run useEffect only once
    // Read https://css-tricks.com/run-useeffect-only-once/
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}