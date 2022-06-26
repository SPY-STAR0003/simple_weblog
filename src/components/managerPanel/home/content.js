// hooks & libraries
import React from 'react';
import Link from "next/link";

// antd components
import { Layout } from 'antd';
const { Content } = Layout;
import { Card, Col, Row } from "antd";
import { FileDoneOutlined, SettingOutlined, TeamOutlined } from "@ant-design/icons";

export default function HomeContent() {

    return (
        <Content
            className="site-layout-background"
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
            }}
        >
            <div>
                <h2 className={"fs-5 bold-9"}>  صفحه اصلی پنل مدیریت </h2>
            </div>
            <div>
                <p className={"fs-4 bold-6 mt-5"}>
                    شما در اینجا می توانید با کلیک روی موارد زیر یا گزینه های سمت راست به صفحه دلخواه خود بروید.
                </p>
                <p className={"fs-3 bold-3 mb-3"}>
                    قابل ذکر است که شما می توانید با کلیک روی آیکون کنار لوگو فهرست را کوچک تر بکنید !
                </p>
            </div>
            <div className="site-card-wrapper m-5 textRight">
                <Row gutter={16}>
                    <Col span={8}>
                        <Link href={"/adminPanel/articles"}>
                            <Card className={"relative m-3 sexyBlueBackground radius-4 pointer smallScale"} bordered={false}>
                                <h3 className={"white fs-4 bold-5"}> مقالات </h3>
                                <p className={"lineHeight-4 pr-2 h-3"}>
                                    در این قسمت شما می توانید مقالات ساخته شده توسط خود را مشاهده کنید،
                                    هم چنین می توانید مقالات خود را ویرایش کنید یا یک مقاله جدید به وجود آورید.
                                </p>
                                <FileDoneOutlined className={"leftBottomAbs m-6 fs-30 opa-2"} />
                            </Card>
                        </Link>
                    </Col>
                    <Col span={8}>
                        <Link href={"/adminPanel/users"}>
                            <Card className={"relative m-3 lushBackground radius-4 pointer smallScale"} bordered={false}>
                                <h3 className={"white fs-4 bold-5"}> کاربران </h3>
                                <p className={"lineHeight-4 pr-2 h-3"}>
                                    در این قسمت می توانید کاربرانی که در وبلاگ شما عضو شده اند مشاهده کنید.
                                    هم چنین می توانید اطلاعات آنها را ویرایش کنید یا میزان دسترسی آنان را تغییر دهید.
                                </p>
                                <TeamOutlined className={"leftBottomAbs m-6 fs-30 opa-2"} />
                            </Card>
                        </Link>
                    </Col>
                    <Col span={8}>
                        <Link href={"/adminPanel/profile"}>
                            <Card className={"relative m-3 peachBackground radius-4 pointer smallScale"} bordered={false}>
                                <h3 className={"white fs-4 bold-5"}> پروفایل </h3>
                                <p className={"lineHeight-4 pr-2 h-3"}>
                                    در این قسمت شما می توانید اطلاعات خود را ویرایش کنید مثلاً رمز عبور یا نام کاربری خود را تغییر دهید.
                                </p>
                                <SettingOutlined className={"leftBottomAbs m-6 fs-30 opa-2"} />
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </div>
        </Content>
    )
}