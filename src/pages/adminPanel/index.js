import ManagerPanel from "../../components/managerPanel/home";
import Head from "next/head";
import Articles from "../../components/managerPanel/articles";


export default function AdminPanel() {
    return (
        <>
            <Head>
                <title> پنل مدیریت </title>
            </Head>
            <ManagerPanel />
        </>
    );
};