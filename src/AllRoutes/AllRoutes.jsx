import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import LoginPage from "../Pages/Login";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
export default AllRoutes;
