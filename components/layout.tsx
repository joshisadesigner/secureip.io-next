import {ReactNode} from "react";

export default function Layout(props: {
  children: ReactNode;
}): JSX.Element {
  return (
    <>
      {props.children}
    </>
  )
}