import { useContext } from "react";
import Counter from "../components/Counter";
import ListaTareas from "../components/ListaTareas";
import Mensaje from "../components/Mensaje";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const userCtx = useContext(UserContext);
    const navigate = useNavigate();

    if (!userCtx) {
        throw new Error("Dashboard debe estar dentro de UserProvider");
    }

    const { user, logout } = userCtx;

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <div>
            <h1>Panel de control</h1>
            {user &&
                (
                    <h2>Bienvenido, {user.name}</h2>
                )
            }

            <hr />
            <Counter />
            <hr />
            <h2>Lista de tareas</h2>
            <ListaTareas />

            <hr />

            <h2>Mensaje Condicional</h2>
            <Mensaje />
            {user && (
                <div>
                    <button onClick={handleLogout}>Cerrar sesión</button>
                </div>
            )}
        </div>
    )
}

export default Dashboard;