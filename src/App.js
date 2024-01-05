import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import NoteManager from "./pages/note-manager/note-manager";
import Login from "./pages/auth/login/login";
import Register from "./pages/auth/register/register";
import Loader from "../src/components/loader/Loader";
import "./App.css";

const isAuthenticated = () => {
    return !!localStorage.getItem('accessToken');
};

const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/" />;
};

const PublicRoute = ({ children }) => {
    return isAuthenticated() ? <Navigate to="/dashboard" /> : children;
};

const App = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
                <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
                <Route path="/add" element={<ProtectedRoute><NoteManager /></ProtectedRoute>} />
                <Route path="/view/:noteId" element={<ProtectedRoute><NoteManager /></ProtectedRoute>} />
                <Route path="/edit/:noteId" element={<ProtectedRoute><NoteManager /></ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
