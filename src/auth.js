export const loginUser = (email, password) => {
    if(email === "admin@gmail.com" && password === "admin1234"){
        localStorage.setItem("user", JSON.stringify({role: "admin"}));
        return "admin";
    }

    if(email === "customer@gmail.com" && password === "customer1234"){
        localStorage.setItem("user", JSON.stringify({role: "customer"}));
        return "customer";
    }
    return null;

};
export const getUser = () =>{
    return JSON.parse(localStorage.getItem("user"));
};
export const logout = () =>{
    localStorage.removeItem("user");
}