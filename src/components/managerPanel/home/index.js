// hooks & libraries
import React , {useState} from 'react';
import Link from "next/link";

// antd components
import { Layout } from 'antd';
import Sidebar from "../layout/sidebar";

// components
import PageHeader from "../layout/header";
import HomeContent from "./content";

export default function ManagerPanel() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout className={"managerPanel"}>
            <Sidebar collapsed={collapsed} selectedKey={"1"} />
            <Layout className="site-layout">
                <PageHeader collapsed={collapsed} setCollapsed={setCollapsed}/>
                <HomeContent />
            </Layout>
        </Layout>
    )
}