import Head from 'next/head'
import HeaderNavbar from "../components/weblog/content/headerNavbar";
import {Layout} from "antd";
import React from "react";
import Image from "next/image";
const {Content , Footer} = Layout;


export default function Error404() {

    return (

        <>
            <Head>
                <title> صفحه پیدا نشد ... </title>
            </Head>
            <Layout>
                <HeaderNavbar selectedNav={"-"} />
                <Content className="padding-50x">
                    <Layout className="site-layout-background padding-24y">
                        <Content
                            style={{
                                padding: '0 24px',
                                minHeight: 280,
                            }}
                            className={"flexCenter"}
                        >
                            <Image
                                src="/images/404Error.png"
                                alt="ERROR 404"
                                width={"800px"}
                                height={"500px"}
                            />
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