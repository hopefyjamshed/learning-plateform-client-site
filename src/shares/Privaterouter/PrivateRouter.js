
import { useContext } from 'react';
import { Navigate, useLocation, } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation()
    if (loading) {
        return <Spinner animation="border" />;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;

    }

    return children;


};

export default PrivateRouter;