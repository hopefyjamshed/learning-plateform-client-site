import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const navigate = useNavigate()
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRouter;