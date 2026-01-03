import { useEffect, useState, useRef } from "react";
import { getRestaurants } from "./data";
import restaurantCard from "./RestaurantCard";

const CustomerDashboard = () =>{
    const [data, setData] = useState([]);
    const searchRef = useRef();

    useEffect(() =>{
        setData(getRestaurants());
        searchRef.current.focus();
    }, []);

    const handleSearch = (e) =>{
        const val = e.target.value.toLowerCase();
        const all = getRestaurants();
        setData(
            all.filter(
                (r) =>
                    r.restaurantName.toLowerCase().
includes(val) || r.address.toLowerCase().includes(val)
            )
        );
    };

    return (
        <div>
            <h2>Customer Dashboard</h2>
            <input ref={searchRef} placeholder="Search" onChange={handleSearch} />

            {data.map((r) => (
                <restaurantCard key = {r.restaurantID} data = {r} />
            ))}
        </div>
    );
};

export default CustomerDashboard;