// hooks & libraries
import React from 'react';

// antd layout
import { Layout } from 'antd';
const { Content } = Layout;

// components
import UsersTable from "./usersTable";
import AddUsersForm from "./addusersForm";

export default function UsersContent() {

    return (
        <Content
            className="site-layout-background"
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
            }}
        >
            <div className={"adminPanelUsersTable"}>
                <h2 className={"fs-5 bold-7 mtb-3"}> لیست کاربران ثبت نام شده </h2>
                <p className={"fs-3 bold-400 mb-3"}> شما می توانید با کلیک روی دکمه + پایین سمت چپ صفحه اعضای جدید را اضافه کنید. </p>
                <UsersTable />
                <AddUsersForm />
            </div>
        </Content>
    )
}

