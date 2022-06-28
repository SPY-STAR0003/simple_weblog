// antd components
import { Select } from 'antd';
const { Option } = Select;

export default function SelectInput({ article , setArticle }) {

    return (
        <Select
            showSearch
            style={{
                width: 200,
            }}
            placeholder="برای جستجو بین عنوان ها ابتدای عنوان خود را وارد کنید ..."
            size={"large"}
            onSelect={e => setArticle({...article , sort : e})}
        >
            <Option value="آموزشی">آموزشی</Option>
            <Option value="کاربردی">کاربردی</Option>
            <Option value="تجربه کاربری">تجربه کاربری</Option>
            <Option value="معرفی ابزار">معرفی ابزار</Option>
            <Option value="نقد و بررسی">نقد و بررسی</Option>
            <Option value="آگهی">آگهی</Option>
            <Option value="کسب و کار">کسب و کار</Option>
        </Select>
    )
}
