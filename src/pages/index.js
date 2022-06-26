import Head from 'next/head'
import Image from 'next/image'
import FormLogin from "../components/login/form";

export default function Home() {
  return (
    <div>
        <Head>
            <title> پروژه وبلاگ کمپ راکت </title>
        </Head>
        <FormLogin />
    </div>
  )
}
