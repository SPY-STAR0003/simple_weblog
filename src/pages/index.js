import Head from 'next/head'
import HomeWeblog from "../components/weblog/home";

export default function Home() {
  return (
    <>
        <Head>
            <title> وبلاگ آسان بیاموز </title>
        </Head>
        <HomeWeblog />
    </>
  )
}
