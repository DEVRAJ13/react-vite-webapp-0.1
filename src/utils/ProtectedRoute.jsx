import { Navigate } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
    const auth = useSelector((state) => state.auth);

    if (!auth.isAuthenticated) {
        return <Navigate to="/home" replace />;
    }

    return children;
};

export default ProtectedRoute;
