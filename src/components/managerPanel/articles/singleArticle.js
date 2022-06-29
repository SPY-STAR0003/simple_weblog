// antd components
import { EditOutlined, EllipsisOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar, Card, Button } from 'antd';
const { Meta } = Card;
import Link from "next/link";


import {useState} from "react";

export default function SingleArticle({article}) {
    const [loading, setLoading] = useState(false);
    let { id , subject , sort , hashtags , content } = article

    if (sort === undefined) sort = "متفرقه";
    content = `${content.substring(0 , 50)}...`

    return (
        <Card
            className={"articleCard"}
            style={{
                width: 300,
            }}
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={[
                <DeleteOutlined key="delete" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <div className={"opacityDiv"}>
                <Link
                    href={"articles/[article]"}
                    as={`articles/${article.id}`}
                >
                    <Button
                        type="primary"
                        loading={loading}
                        onClick={() => setLoading(true)}
                        className={"radius-3"}
                    >
                        مشاهده مقاله
                    </Button>
                </Link>
            </div>
            <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={subject}
                description={content}
            />
        </Card>
    )
}