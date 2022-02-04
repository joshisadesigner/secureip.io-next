import {ReactNode} from "react";

export const siteTitle = "Secure IP";

export default function Layout(props: {
  children: ReactNode;
  home: boolean;
}): JSX.Element {
  return (
    <main>
      {props.children}
    </main>
  )
}