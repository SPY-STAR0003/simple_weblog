import { Button, Form, Input, Modal, Radio } from 'antd';
import React , { useState } from 'react';
import { PlusOutlined, UserOutlined, NumberOutlined, HomeFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addUser } from "./../../../store/slices/users"
import axios from "axios";

const CollectionCreateForm = ({ visible, addUserHandler, onCancel }) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="فرم اضافه کردن عضو جدید"
            okText="تایید"
            cancelText="لغو"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        addUserHandler(values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                    modifier: 'public',
                }}
            >
                <Form.Item
                    name="name"
                    label="نام و نام خانوادگی :"
                    rules={[
                        {
                            required: true,
                            whitespace: true,
                            message: 'لطفا نام کاربر را کامل وارد کنید',
                        },
                    ]}
                >
                    <Input
                        size={"large"}
                        type={"name"}
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        allowClear
                        placeholder={"لطفا نام خود را وارد کنید"}
                    />
                </Form.Item>
                <Form.Item
                    name="age"
                    label="سن :"
                    rules={[
                        {
                            required: true,
                            whitespace: true,
                            message: 'لطفا سن کاربر را به عدد وارد کنید',
                        },
                    ]}
                >
                    <Input
                        size={"large"}
                        type="number"
                        prefix={<NumberOutlined className="site-form-item-icon" />}
                        placeholder={"لطفا سن خود را وارد کنید"}

                    />
                </Form.Item>
                <Form.Item
                    name="city"
                    label="استان محل سکونت :"
                    rules={[
                        {
                            required: true,
                            whitespace: true,
                            message: 'لطفا محل زندگی کاربر را وارد کنید',
                        },
                    ]}
                >
                    <Input
                        size={"large"}
                        type="name"
                        prefix={<HomeFilled  className="site-form-item-icon" />}
                        allowClear
                        placeholder={"لطفا شهر محل زندگی خود را وارد کنید"}
                    />
                </Form.Item>
                <Form.Item
                    name="role"
                    label={"سطح دسترسی کاربر را انتخاب کنید :"}
                    className="collection-create-form_last-form-item"
                >
                    <Radio.Group>
                        <Radio value="admin">ادمین</Radio>
                        <Radio value="simpleMember">عضو ساده</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name="description" label="توضیحات :">
                    <Input
                        type="textarea"
                        placeholder={"چنانچه توضیحاتی اضافی درباره کاربر دارید در این قسمت وارد کنید."}
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default function AddUsersForm() {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch()

    const addUserHandler = async (values) => {
        let sendToApi = await axios.post("https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_users" , values)
        dispatch(addUser(values))
        setVisible(false);
    };

    return (
        <div>
            <Button
                className={"addBtnForm"}
                type="primary"
                shape="circle"
                icon={<PlusOutlined />}
                size={"large"}
                onClick={() => {
                    setVisible(true)
                }}
            />
            <CollectionCreateForm
                visible={visible}
                addUserHandler={addUserHandler}
                onCancel={() => setVisible(false) }
            />
        </div>
    );
}