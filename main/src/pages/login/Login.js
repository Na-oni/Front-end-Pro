import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authorization';
import {useLocation, useNavigate} from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || '/';

    const handleLogin = () => {
        dispatch(login());
        navigate(from, { replace: true });
    };

    return (
        <div className="container">
            <div>
                <h2>Login Page</h2>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default Login;
