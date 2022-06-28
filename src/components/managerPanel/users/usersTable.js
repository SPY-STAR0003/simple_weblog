import {Space, Table} from "antd";
import React, {useState} from "react";
import {useSelector} from "react-redux";
import { DownOutlined } from "@ant-design/icons";


export default function UsersTable() {


    const defaultExpandable = {
        expandedRowRender: (record) => <p>{record.description}</p>,
    };

    const [expandable, setExpandable] = useState(defaultExpandable);
    const [rowSelection, setRowSelection] = useState({});
    const [ellipsis, setEllipsis] = useState(false);

    const columns = [
        {
            title: 'نام',
            dataIndex: 'name',
            align : "center"
        },
        {
            title: 'سن',
            dataIndex: 'age',
            align : "center",
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: 'استان محل سکونت',
            dataIndex: 'city',
            align : "center",
            filters: [
                {
                    text: 'اصفهان',
                    value: 'اصفهان',
                },
                {
                    text: 'تهران',
                    value: 'تهران',
                },
                {
                    text: 'مشهد',
                    value: 'مشهد',
                },
                {
                    text: 'شیراز',
                    value: 'شیراز',
                },
                {
                    text: 'تبریز',
                    value: 'تبریز',
                },
            ],
            onFilter: (value, record) => record.city.indexOf(value) === 0,
        },
        {
            title: 'وظیفه',
            dataIndex: 'role',
            align : "center",
            filters: [
                {
                    text: 'مدیر',
                    value: 'مدیر',
                },
                {
                    text: 'عضوساده',
                    value: 'عضوساده',
                },
            ],
            onFilter: (value, record) => record.address.indexOf(value) === 0,
        },
        {
            title: 'عملکرد',
            key: 'action',
            sorter: true,
            align : "center",
            render: () => (
                <Space size="middle">
                    <a>حذف</a>
                    <a>
                        <Space>
                            گزینه های بیشتر
                            <DownOutlined />
                        </Space>
                    </a>
                </Space>
            ),
        },
    ];

    const tableColumns = columns.map((item) => ({ ...item, ellipsis }));

    const usersData = useSelector(state => state.users)

    const tableData = usersData.map((user) => ({...user , key : user.id}))

    const tableProps = {
        bordered : false,
        loading : false,
        size : "large",
        expandable,
        showHeader : true,
        rowSelection,
    };

    return (
        <Table
            {...tableProps}
            pagination={{
                position: ["none", "bottomLeft"],
            }}
            columns={tableColumns}
            dataSource={tableData ? tableData : []}
            className={"textRight showUsersAdminPanelTable"}
        />
    )
}