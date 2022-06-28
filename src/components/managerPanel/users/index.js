// hooks & libraries
import React , {useState} from 'react';

// antd layout
import { Layout } from 'antd';

// components
import Sidebar from "../layout/sidebar";
import PageHeader from "../layout/header";
import UsersContent from "./content";

export default function Users() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout className={"managerPanel"}>
            <Sidebar collapsed={collapsed} selectedKey={"2"} />
            <Layout className="site-layout">
                <PageHeader collapsed={collapsed} setCollapsed={setCollapsed}/>
                <UsersContent />
            </Layout>
        </Layout>
    )
}