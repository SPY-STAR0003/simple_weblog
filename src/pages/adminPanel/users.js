import Users from "../../components/managerPanel/users";
import { useDispatch } from "react-redux";
import { getUsers } from "../../store/slices/users";

export default function AdminPanel({usersData}) {

    const dispatch = useDispatch()
    dispatch(getUsers(usersData))

    return (
        <Users />
    );
};

export async function getServerSideProps() {

    const res = await fetch(`https://62b6ea7b76028b55ae716ba0.endapi.io/weblog_users`)
    const usersData = await res.json()

    return { props: { usersData } }
}