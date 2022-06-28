// hooks & libraries
import { Layout } from 'antd';
import React , { useState } from 'react';
import { useSelector } from "react-redux";
const { Content } = Layout;

// antd components
import Sidebar from "../layout/sidebar";
import PageHeader from "../layout/header";
import SingleArticle from "./singleArticle";
import AddNewArticle from "./addNewArticle";


export default function Articles() {
    const [collapsed, setCollapsed] = useState(false);
    const articles = useSelector(state => state.articles)
    return (
        <Layout className={"managerPanel"}>
            <Sidebar collapsed={collapsed} selectedKey={"3"} />
            <Layout className="site-layout">
                <PageHeader collapsed={collapsed} setCollapsed={setCollapsed}/>
                <Content
                    className="site-layout-background adminPanelArticles"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <h2 className={"fs-5 bold-7 mtb-3"}> لیست مقالات سایت </h2>
                    <p className={"fs-3 bold-400 mb-3"}> شما می توانید با کلیک روی دکمه + پایین سمت چپ صفحه مقاله ی جدیدی را اضافه کنید. </p>
                    <div className={"articleCards"}>
                        {
                            articles.map(article => {
                                return (
                                    <SingleArticle key={article.id} article={article} />
                                )
                            })
                        }
                    </div>
                    <AddNewArticle />
                </Content>
            </Layout>
        </Layout>
    )
}