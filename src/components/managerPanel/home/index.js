import { Layout } from 'antd';
import React , {useState} from 'react';
import Sidebar from "../layout/sidebar";
const { Content } = Layout;
import PageHeader from "../layout/header";


export default function ManagerPanel() {
    const [collapsed, setCollapsed] = useState(false);
    console.log("home")

    return (
        <Layout className={"managerPanel"}>
            <Sidebar collapsed={collapsed} selectedKey={"1"} />
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