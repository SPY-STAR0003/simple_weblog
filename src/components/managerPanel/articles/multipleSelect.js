// antd components
import { Select } from 'antd';
const { Option } = Select;

const children = []
const childrenSubjects = [
    "جاوااسکریپت" ,
    "پایتون" ,
    "توسعه وب" ,
    "بازار کار" ,
    "حقوق و مزایا" ,
    "جذب همکار" ,
    "دعوت به همکاری" ,
    "آگهی های استخدامی" ,
    "PHP" ,
    "Laravel" ,
    "HTML" ,
    "CSS" ,
    "React" ,
    "Vue" ,
    "Angular" ,
    "NextJs" ,
    "Redux" ,
    "Nuxt" ,
    "UI-Design" ,
    "SASS" ,
    "PWA" ,
    "NodeJs" ,
    "ExpressJs" ,
    "متفرقه" ];

childrenSubjects.forEach((subject , i) => {
    return (
        children.push(<Option key={subject}> {subject} </Option>)
    )
})

export default function MultipleSelect({ article , setArticle }) {
    return (
        <>
            <Select
                mode="multiple"
                allowClear
                style={{
                    width: '100%',
                }}
                placeholder="لطفا مقادیر دلخواه خود را انتخاب کنید..."
                onChange={e => setArticle({...article, hashtags: e})}
                size={"large"}
            >
                {children}
            </Select>
        </>
    )
}