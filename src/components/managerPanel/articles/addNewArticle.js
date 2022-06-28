// hooks & libraries
import React , {useState} from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";
import { addArticle } from "../../../store/slices/articles";

// antd components
import { Button, Form, Input, Modal } from 'antd';
import { PlusOutlined, UserOutlined, HomeFilled } from "@ant-design/icons";
const { TextArea } = Input

// components
import SelectInput from "./selectInput";
import MultipleSelect from "./multipleSelect";

export default function AddNewArticle() {
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();
    const [value, setValue] = useState('');
    const [article , setArticle] = useState({})

    const dispatch = useDispatch()

    const inputHandler = ( key , value ) => {
        setArticle({...article , [key] : value})
        console.log(article)
    }

    const addArticleHandler = async () => {
        let sendToApi = await axios.post("https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_articles" , article)
        dispatch(addArticle(article))
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
            <Modal
                visible={visible}
                title="فرم اضافه کردن مقاله جدید"
                okText="تایید"
                cancelText="لغو"
                onCancel={() => setVisible(false)}
                width={"1000px"}
                style={{
                    top : 20,
                }}
                onOk={() => {
                    form
                        .validateFields()
                        .then((values) => {
                            form.resetFields();
                            addArticleHandler();
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
                        name="subject"
                        label="عنوان مقاله :"
                        rules={[
                            {
                                required: true,
                                whitespace: true,
                                message: 'لطفا یک عنوان برای مقاله خود درنظر بگیرید',
                            },
                        ]}
                    >
                        <Input
                            size={"large"}
                            type={"name"}
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            allowClear
                            placeholder={"عنوان مقاله خود را در اینجا وارد کنید"}
                            onChange={e => inputHandler("subject" , e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        name="sort"
                        label="نوع مقاله خود را مشخص کنید :"
                    >
                        <SelectInput article={article} setArticle={setArticle} />
                    </Form.Item>
                    <Form.Item
                        name="sort"
                        label="هشتگ های مرتبط با مقاله خود را مشخص کنید :"
                    >
                        <MultipleSelect article={article} setArticle={setArticle} />
                    </Form.Item>
                    <Form.Item
                        name="time"
                        label="زمان تقریبی موردنیاز برای خواندن این مقاله ( به فرمت دقیقه ) :"
                    >
                        <Input
                            size={"large"}
                            type="number"
                            prefix={<HomeFilled  className="site-form-item-icon" />}
                            allowClear
                            placeholder={"زمان تقریبی برای خواندن این مقاله را اینجا وارد کنید"}
                            onChange={e => inputHandler("time" , e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        name="content"
                        label="متن مقاله :"
                    >
                        <TextArea
                            value={value}
                            onChange={e => inputHandler("content" , e.target.value)}
                            placeholder="متن مقاله خود را در این قسمت وارد کنید ..."
                            autoSize={{ minRows: 3, maxRows: 20 }}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}