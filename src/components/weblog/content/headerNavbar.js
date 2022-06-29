import Image from "next/image";
import { Menu , Layout } from "antd";
import React from "react";
import Link from "next/link";
const { Header } = Layout


export default function HeaderNavbar() {
    const items1 = [
        { key : 1 , label : <Link href={"/"}> خانه </Link>},
        { key : 2 , label : <Link href={"/articles"}> مقالات </Link>},
        { key : 3 , label : <Link href={"/about"}> درباره ما </Link>},
        { key : 4 , label : <Link href={"/login"}> ورود به پنل مدیریت </Link>},
    ];

    return (
        <Header className="header userPanelHeader">
            <div className="logo">
                <Image
                    src="/images/logo-next.png"
                    alt="weblog_logo"
                    width={"50px"}
                    height={"50px"}
                />
            </div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={items1}
                inlineIndent={10}
            />
        </Header>
    )
}