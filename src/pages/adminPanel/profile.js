import Profile from "../../components/managerPanel/profile";
import Head from "next/head";
import ManagerPanel from "../../components/managerPanel/home";


export default function AdminPanel() {
    return (
        <>
            <Head>
                <title> پروفایل کاربر </title>
            </Head>
            <Profile />
        </>
    );
};

export async function getStaticProps() {

    return {
        props : {}
    }
}