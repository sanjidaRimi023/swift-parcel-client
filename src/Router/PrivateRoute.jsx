import React from 'react';
import useAuth from '../Hooks/useAuth';
import LoadSpinner from '../Components/LoadSpinner';
import { Navigate, useLocation} from 'react-router';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    
    const {user, loading }=useAuth()
    if (loading) {
        return <LoadSpinner/>
    }

    if (!user) {
       <Navigate to="login" state={{Form : location}} replace></Navigate> 
    }
    return children;
};

export default PrivateRoute;
