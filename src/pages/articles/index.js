import { Layout } from 'antd';
import React from 'react';
import HeaderNavbar from "../../components/weblog/content/headerNavbar";
const { Content, Footer } = Layout;
import SingleArticle from "../../components/managerPanel/articles/singleArticle";
import SidebarNav from "../../components/weblog/content/sidebarNav";
import Link from "next/link";


export default function Articles({articles}) {
    return (
        <Layout>
            <HeaderNavbar />
            <Content className="padding-50x">
                <Layout className="site-layout-background padding-24y">
                    <SidebarNav />
                    <Content
                        style={{
                            padding: '0 24px',
                            minHeight: 280,
                        }}
                    >
                        <div className={"showUsersArticles"}>
                            <div className={"articleCards userPanelArticles"}>
                                {
                                    articles.data.map(article => <SingleArticle key={article.id} article={article} />)
                                }
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Content>
            <Footer className={"textCenter"}>
                طراحی شده به وسیله محمد زورمند با استفاده از Antd.Design
            </Footer>
        </Layout>
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