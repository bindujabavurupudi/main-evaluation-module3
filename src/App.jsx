import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login"
import AdminDashboard from "./AdminDashboard";
import CustomerDashboard from "./CustomerDashboard";
import AddRestaurant from "./AddRestaurant";
import UpdateRestaurant from "./UpdateRestaurant";
import ProtectedRoute from "./ProtectedRoute";

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Login />} />
      <Route path = "/admin/dashboard" 
      element = 
      {<ProtectedRoute role = "admin">
        <AdminDashboard />
      </ProtectedRoute>

      }
       />

      <Route path = "/customers/dashboard" 
      element = 
      {<ProtectedRoute role = "customer">
        <CustomerDashboard />
      </ProtectedRoute>

      }
       />

      <Route path = "/admin/restaurants/add" 
      element = 
      {<ProtectedRoute role = "admin">
        <AddRestaurant />
      </ProtectedRoute>

      }
       />

      <Route path = "/admin/restaurants/update/:id" 
      element = 
      {<ProtectedRoute role = "admin">
        <UpdateRestaurant />
      </ProtectedRoute>

      }
       />
    </Routes>
    </BrowserRouter>
  );
}

export default App;