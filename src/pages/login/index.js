import Head from 'next/head'
import FormLogin from "../../components/login/form";

export default function Login() {
    return (
        <>
            <Head>
                <title> صفحه ورود به پنل مدیریت </title>
            </Head>
            <FormLogin />
        </>
    )
}