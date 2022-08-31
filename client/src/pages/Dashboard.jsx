import { useEffect } from "react";
import { useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";


function Dashboard() {
    const navigate = useNavigation();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    return (
        <div>Dashboard</div>
    )
}

export default Dashboard