import Head from 'next/head'
import HeaderNavbar from "../../components/weblog/content/headerNavbar";
import {Layout} from "antd";
import React from "react";
const {Content , Footer} = Layout;

export default function About() {
    return (
        <>
            <Head>
                <title> وبلاگ آسان بیاموز </title>
            </Head>
            <Layout>
                <HeaderNavbar selectedNav={"3"} />
                <Content className="padding-50x">
                    <Layout className="site-layout-background padding-24y">
                        <Content
                            style={{
                                padding: '0 24px',
                                minHeight: 280,
                            }}
                        >
                            <h2 className={"fs-4 bold-7"}> این قسمت بزودی آپدیت خواهد شد ... </h2>
                        </Content>
                    </Layout>
                </Content>
                <Footer className={"textCenter"}>
                    طراحی شده به وسیله محمد زورمند با استفاده از Antd.Design
                </Footer>
            </Layout>
        </>
    )
}