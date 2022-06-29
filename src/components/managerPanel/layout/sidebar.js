// hooks & libraries
import Image from "next/image";
import React from "react";
import Link from "next/link";

// antd content
import {BookOutlined, HomeOutlined, SettingOutlined, TeamOutlined} from "@ant-design/icons";
import { Menu , Layout } from "antd";
const { Sider } = Layout

export default function Sidebar({collapsed , selectedKey}) {

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="mangerPanelSidebarLogo">
                <Image src={"/images/logo-next.png"}
                       alt={"next-logo"}
                       width={"200px"}
                       height={"200px"}
                       className={"p-3"}
                />
            </div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[`${selectedKey}`]}
                items={[
                    {
                        key: '1',
                        icon: <HomeOutlined />,
                        label: <Link href={"/adminPanel"}> صفحه اصلی </Link>,
                        className : "textRight",
                    },
                    {
                        key: '2',
                        icon: <TeamOutlined />,
                        label: <Link href={"/adminPanel/users"}> لیست کاربران </Link>,
                        className : "textRight",
                    },
                    {
                        key: '3',
                        icon: <BookOutlined />,
                        label: <Link href={"/adminPanel/articles"}> لیست مقالات </Link>,
                        className : "textRight",
                    },
                    {
                        key: '4',
                        icon: <SettingOutlined />,
                        label: <Link href={"/adminPanel/profile"}> اطلاعات فردی </Link>,
                        className : "textRight",
                    },
                ]}
            />
        </Sider>
    )
}