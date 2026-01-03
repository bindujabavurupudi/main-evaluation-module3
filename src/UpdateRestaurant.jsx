import { useParams, useNavigate } from "react-router-dom";
import { getRestaurants, saveRestaurants } from "./data";
import { useState, useEffect } from "react";

const UpdateRestaurant = () =>{
    const {id} = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState(null);

    useEffect(() =>{
        const res = getRestaurants.find(
            (r) => r.restaurantID === Number(id)
        );
        setForm(res);
    }, [id]);
    if(!form) return null;
    const handleUpdate = () =>{
        const data = getRestaurants().amp((r) =>
        r.restaurantID === Number(id) ? form : r);
        saveRestaurants(data);
        alert("Updated Successfully");
        navigate("/admin/dashboard");
    };

    return (
        <div>
            <h2>Update Restaurant</h2>
            <input 
            value={form.restaurantName}
            onChange={(e) =>
                setForm({ ...form, restaurantName: e.target.value})
            }
            />
            <input 
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value})}
             />
             <button onClick={handleUpdate}></button>
        </div>
    );
};

export default UpdateRestaurant;