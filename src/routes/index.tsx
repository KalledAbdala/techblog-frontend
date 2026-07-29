import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home/home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Articles } from "../pages/Articles/Articles";
import { Article } from "../pages/Article/Article";
import { NewArticle } from "../pages/NewArticle/NewArticle";
import { EditArticle } from "../pages/EditArticle/EditArticle";
import { Settings } from "../pages/Settings/Settings";
import { NotFound } from "../pages/NotFound/NotFound";

export function AppRoutes() {
    return (
    <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<Article />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/dashboard/new" element={<NewArticle />} />
        <Route path="/dashboard/edit/:id" element={<EditArticle />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="*" element={<NotFound />} />
    </Routes>
    );
}