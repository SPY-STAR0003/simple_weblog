import Articles from "../../components/managerPanel/articles";
import {useDispatch} from "react-redux";
import {getArticles} from "../../store/slices/articles";

export default function AdminPanel({data}) {

    const dispatch = useDispatch()
    dispatch(getArticles(data.data))

    return (
        <Articles />
    );
};

export async function getStaticProps() {
    let res = await fetch("https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_articles");
    let data = await res.json()

    return {
        props : {
            data
        }
    }
}