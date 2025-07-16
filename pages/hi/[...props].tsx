import { useRouter } from "next/router";
import { useEffect } from "react";
import { NextPageContext } from "next";

export default function HiAll({ props: serverProps }: { props: string[] }) {
  const {
    query: {props},
  } = useRouter()

  useEffect(() => {
    console.log(props);
    console.log(JSON.stringify(props) === JSON.stringify(serverProps));
  }, [props, serverProps]);

  return(
    <>
      hi{' '}
      <ul>
        {serverProps.map((item) => (
          <li key={item}></li>
        ))}
      </ul>
    </>
  )
}

export const getServerSideProps = (context: NextPageContext) => {
  const {
    query: { props },
  } = context
  
  return {
    props: {
      props,
    },
  }
}