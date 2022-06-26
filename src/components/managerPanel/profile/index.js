// hooks & libraries
import { Layout } from 'antd';
import React , {useState} from 'react';
const { Content } = Layout;

// antd layout
import Sidebar from "../layout/sidebar";
import PageHeader from "../layout/header";



export default function Profile() {
    const [collapsed, setCollapsed] = useState(false);
    console.log("profile")
    return (
        <Layout className={"managerPanel"}>
            <Sidebar collapsed={collapsed} selectedKey={"4"} />
            <Layout className="site-layout">
                <PageHeader collapsed={collapsed} setCollapsed={setCollapsed}/>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    )
}