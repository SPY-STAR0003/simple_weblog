import { Layout } from 'antd';
import React from 'react';
import HeaderNavbar from "../content/headerNavbar";
const { Content, Footer } = Layout;

export default function UserHome() {
    return (
        <Layout className={"height100vh"}>
            <HeaderNavbar selectedNav={"1"} />
            <Content className="padding-50x">
                <Layout className="site-layout-background padding-24y">
                    <Content
                        style={{
                            padding: '0 24px',
                            minHeight: 280,
                        }}
                    >
                        <h2 className={"fs-7 bold-7 mtb-3"}> صفحه اصلی پنل کاربر </h2>
                        <p className={"fs-4 lineHeight-6 pr-6"}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </Content>
                </Layout>
            </Content>
            <Footer className={"textCenter"}>
                طراحی شده به وسیله محمد زورمند با استفاده از Antd.Design
            </Footer>
        </Layout>
    )
}