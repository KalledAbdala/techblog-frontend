import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/home";
import Login from "../pages/Login/Login";

export function AppRoutes() {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    );
}