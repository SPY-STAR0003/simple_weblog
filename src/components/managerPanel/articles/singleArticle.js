// antd components
import { EditOutlined, EllipsisOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

export default function SingleArticle({article}) {
    let { subject , sort , content } = article

    if (sort === undefined) sort = "متفرقه";
    content = `${content.substring(0 , 50)}...`

    return (
        <Card
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
            <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={subject}
                description={content}
            />
        </Card>
    )
}