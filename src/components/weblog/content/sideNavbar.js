import { Menu , Layout } from "antd";
import React from "react";
import { LaptopOutlined, NotificationOutlined, UserOutlined, FilterTwoTone } from "@ant-design/icons";
const { Sider } = Layout;


export default function SideNavbar() {

    const items = [
        {
            key : 1,
            label : "آخرین مقالات",
            children : [
                { key : 105 , label : "مقاله شماره 1" },
                { key : 106 , label : "مقاله شماره 2" },
                { key : 107 , label : "مقاله شماره 3" },
                { key : 108 , label : "مقاله شماره 4" }
            ]
        },
        {
            key : 2,
            label : "مقالات محبوب",
            children : [
                { key : 109 , label : "مقاله شماره 1" },
                { key : 110 , label : "مقاله شماره 2" },
                { key : 111 , label : "مقاله شماره 3" },
                { key : 112 , label : "مقاله شماره 4" }
            ]
        },
    ]

    return (
        <Sider className="site-layout-background articleUserPanelSidebar" width={200}>
            <div className={"mr-3"}>
                <FilterTwoTone />
                <h2 className={"bold-7 mtb-3"}> فیلتر مقاله ها </h2>
            </div>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{
                    height: '100%',
                }}
                items={items}
            />
        </Sider>
    )
}