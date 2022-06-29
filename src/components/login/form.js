// hooks & libraries
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from 'react-redux'

// antd content
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import Link from "next/link";


export default function FormLogin() {

    //  ============== states =============================
    const [loading, setLoading] = useState(false);
    // =============== redux ==============================
    const dispatch = useDispatch()
    // =============== JSON ===============================
    return (
        <div className={"logInForm centerBox"}>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
            >
                <Image src={"/images/logo-next.png"}
                       alt={"next-logo"}
                       width={"100%"}
                       height={"100%"}
                />
                <h2 className={"m-4 fs-5"}> ورود به بخش مدیریت </h2>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'لطفا نام کاربری خود را وارد کنید',
                        },
                    ]}
                >
                    <Input
                        id={"logInUsername"}
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="نام کاربری"
                        onChange={e => dispatch(setUserForm({key : e.target.id, value : e.target.value}))}
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'لطفا رمز عبور خود را وارد کنید',
                        },
                    ]}
                >
                    <Input
                        id={"logInPassword"}
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="رمز عبور"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox> اطلاعات من را به خاطر بسپار </Checkbox>
                    </Form.Item>
                </Form.Item>

                <Form.Item>
                    <Button
                        className="login-form-button"
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                        onClick={() => setLoading(true)}
                    >
                        <Link href={"/adminPanel"}> ورود </Link>
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
