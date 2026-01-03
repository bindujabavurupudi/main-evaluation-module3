import { useState } from "react";
import { getRestaurants, saveRestaurants } from "./data";
import { useNavigate } from "react-router-dom";

const AddRestaurant = () =>{
    const [form, setForm] = useState({
        restaurantName: "",
        address: "",
        type: "Rajasthani",
        parkingLot: false,
        image: "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"

    });
    const navigate = useNavigate();
    const handleAdd = () =>{
        const data = getRestaurants();
        const newRes = {
            ...form, 
            restaurantID: Date.now(),
        };
        saveRestaurants([...data, newRes]);
        alert("Restaurant Added");
        navigate("/admin/dashboard");
    };

    return (
        <div>
            <h2>Add restaurant</h2>
            <input placeholder="Name" 
            onChange={(e) => setForm({ ...form, restaurantName: e.target.value })}
            />

            <input placeholder="Address"
             onChange={(e) => setForm({ ...form, address: e.target.value})} 
             />

             <select onChange={(e) => setForm({ ...form, type:
                e.target.value })}>
                    <option >Rajasthani</option>
                    <option >Gujarati</option>
                    <option >Mughlai</option>
                    <option >Jain</option>
                    <option >North Indian</option>
                    <option >South Indian</option>
                </select>

                <select onChange={(e) =>
                    setForm({ ...form, parkingLot: e.target.value === "true"})
                }
                >
                 <option value="false">No Parking</option>   
                 <option value="true">Parking Available</option>   
                </select>

                <button onClick={handleAdd}>Add</button>
        </div>


    );
};

export default AddRestaurant;