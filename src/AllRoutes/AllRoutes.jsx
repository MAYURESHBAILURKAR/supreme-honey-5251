import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import LoginPage from "../Pages/Login";
import Register from "../Pages/Register";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
export default AllRoutes;
