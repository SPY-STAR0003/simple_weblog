import Profile from "../../components/managerPanel/profile";


export default function AdminPanel() {
    return (
        <Profile />
    );
};

export async function getStaticProps() {

    return {
        props : {}
    }
}