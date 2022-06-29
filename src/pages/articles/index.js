import UserPanelArticles from "../../components/weblog/articles";
import Head from "next/head";
import React from "react";


export default function Articles({articles}) {
    articles = articles.data

    return (
        <>
            <Head>
                <title> مقالات </title>
            </Head>
            <UserPanelArticles articles={articles} />
        </>
    )
}

export async function getServerSideProps() {

    let res = await fetch("https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_articles")
    let articles = await res.json()

    return {
        props : {
            articles,
        }
    }
}