import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./auth";

const Login = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () =>{
        const role = loginUser(email, password);
        if(!role) return alert("Invalid Credentials");
        if(role === "admin") navigate("/admin/dashboard");
        else navigate("/customers/dashboard");
    };
    return (
        <div>
            <h2>Login</h2>
            <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleLogin}>Login</button>
        </div>
    );

};
export default Login;