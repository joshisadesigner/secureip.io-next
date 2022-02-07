import {ReactNode} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const siteTitle = "Secure IP";

export default function Layout(props: {
  children: ReactNode;
}): JSX.Element {
  return (
    <>
      <Navbar />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  )
}