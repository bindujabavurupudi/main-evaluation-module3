import {Navigate} from "react-router-dom";
import { getUser } from "./auth";

const ProtectedRoute = ({children, role}) =>{
    const user = getUser();

    if(!user) return <Navigate to = "/" />;
    if(role && user.role !== role)return <Navigate to = "/" />;
    return children;
};

export default ProtectedRoute;