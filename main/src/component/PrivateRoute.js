import React from 'react';
import { useSelector } from 'react-redux';
import {Navigate, useLocation} from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const location = useLocation();
    console.log(location);

    if (isAuthenticated) { return children }

    return <Navigate to="/login" state={{ from: location }}/>;
};

export default PrivateRoute;
