import UserPanelArticles from "../../components/weblog/articles";


export default function Articles({articles}) {
    articles = articles.data

    return (
        <UserPanelArticles articles={articles} />
    )
}

export async function getServerSideProps() {

    let res = await fetch("https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_articles")
    let articles = await res.json()

    return {
        props : {
            articles,
        }
    }
}