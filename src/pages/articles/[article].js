import { Layout, Breadcrumb } from 'antd';
import React from 'react';
import HeaderNavbar from "../../components/weblog/content/headerNavbar";
const { Content, Footer } = Layout;
import SingleArticle from "../../components/managerPanel/articles/singleArticle";
import SideNavbar from "../../components/weblog/content/sideNavbar";
import Link from "next/link";

export default function Article({article}) {

    let { id , subject , sort , time , hashtags , content } = article

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
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>
                                <Link href={"/articles"}> مقالات </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                {subject}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <div className={"articleContent"}>
                            <div
                                className={"fs-3 absTopLeft borderedPrimaryOutline p-2 radius-18"}
                            >
                                 زمان تقریبی مطالعه : {time} دقیقه
                            </div>
                            <h2 className={"fs-5 bold-6 mb-4"}> {subject} </h2>
                            <p className={"fs-4 bold-3 lineHeight-4 pr-3"}>{content}</p>
                            <p>
                                {
                                    hashtags.map((hashtag,index) => {
                                        return (
                                            <span
                                                key={index}
                                                className={"fs-3 bold-3 mrl-1 borderedPrimary prl-2 ptb-1 radius-20 pointer"}
                                            >
                                                {`${hashtag}`}
                                            </span>
                                        )
                                    })
                                }
                            </p>
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

export async function getServerSideProps({ params }) {

    let res = await fetch(`https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_articles/${params.article}`)
    let article = await res.json()

    return {
        props : {
            article : article.data
        }
    }
}