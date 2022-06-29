import { Layout } from 'antd';
import React from 'react';
import HeaderNavbar from "../../weblog/content/headerNavbar";
const { Content, Footer } = Layout;
import SingleArticle from "../../managerPanel/articles/singleArticle";
import SideNavbar from "../content/sideNavbar";
import Link from "next/link";


export default function UserPanelArticles({articles}) {

    return (
        <Layout>
            <HeaderNavbar selectedNav={"2"} />
            <Content className="padding-50x">
                <Layout className="site-layout-background padding-24y">
                    <SideNavbar />
                    <Content
                        style={{
                            padding: '0 24px',
                            minHeight: 280,
                        }}
                    >
                        <div className={"showUsersArticles"}>
                            <div className={"articleCards userPanelArticles"}>
                                {
                                    articles.map(article => <SingleArticle key={article.id} article={article} />)
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