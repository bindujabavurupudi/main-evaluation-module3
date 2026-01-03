import { use, useEffect, useState } from "react";
import { getRestaurants, saveRestaurants } from "./data";

import restaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const AdminDashboard = () =>{
    const [data, setData] = useState([]);

    useEffect(() =>{
        window.addEventListener("focus", () =>{
            setData(JSON.parse(localStorage.getItem("evaData"))
        || []);
    })
}, [])


    // useEffect(() =>{
    //     setData(getRestaurants());
    // }, []);

    const handleDelete = (id) =>{
        if(!window.confirm("Are you sure you want to delete?")) return;
        const updated = data.filter((r) => r.restaturantID !== id);
        saveRestaurants(updated);
        setData(updated);
        alert("Deleted Successfully");

    };

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <Link to="/admin/restaurants/add">
            <button>Add Restaurant</button>
            </Link>

            {data.map((r) =>{
                <restaurantCard
                key = {r.restaturantID}
                data = {r}
                admin
                onDelete = {handleDelete}
                />
            })}
        </div>
    );
};

export default AdminDashboard;