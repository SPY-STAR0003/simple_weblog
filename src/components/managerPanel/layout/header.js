// libraries & hooks
import React from "react";

// antd components
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout } from 'antd';
const { Header } = Layout

export default function PageHeader({collapsed , setCollapsed}) {

    return (
        <Header
            className="site-layout-background fs-4 bold-6"
            style={{
                padding: 0,
            }}
        >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger ml-6',
                onClick: () => setCollapsed(!collapsed),
            })}
            مدیریت وبلاگ - تمرین کمپ ریکت راکت
        </Header>
    )
}