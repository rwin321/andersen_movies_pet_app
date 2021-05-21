import { connect, useDispatch, useSelector } from "react-redux";
import { setAuth } from "../Store/Actions/mainAction";

const Logout = ({ }) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        localStorage.clear();
        dispatch(setAuth(false))
    }
    return (
        <div>
            <h1>Выйти из учетной записи?</h1>
            <button onClick={handleClick}>ДА</button>
        </div>
    );
};

export default Logout;
