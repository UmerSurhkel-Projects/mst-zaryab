import { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import NoteManager from "./pages/note-manager/note-manager";
import Login from "./pages/auth/login/login";
import Register from "./pages/auth/register/register";
import Loader from "../src/components/loader/Loader";
import "./App.css";
import Profile from "./pages/profile/Profile";

const isAuthenticated = () => {
    return !!localStorage.getItem('accessToken');
};

const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/" />;
};

const PublicRoute = ({ children }) => {
    return isAuthenticated() ? <Navigate to="/dashboard" /> : children;
};


export const AuthContext = createContext(null);

const App = () => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);

    const cUser = useContext(AuthContext);
	useEffect(() => {
		if (!cUser) {
            console.log('INSIDE CUSER IF ',  localStorage.getItem('user'))
			const userData = JSON.parse(localStorage.getItem('user'));
			setCurrentUser(userData)
		}
	}, [cUser])

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    const getUserData = (userData) => {
        setCurrentUser(userData);
    }

    return (
        <AuthContext.Provider value={currentUser}>
            <BrowserRouter>
                <Routes>
                    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    <Route path="/" element={<PublicRoute><Login setUserData={getUserData}/></PublicRoute>} />
                    <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
                    <Route path="/add" element={<ProtectedRoute><NoteManager /></ProtectedRoute>} />
                    <Route path="/view/:noteId" element={<ProtectedRoute><NoteManager /></ProtectedRoute>} />
                    <Route path="/edit/:noteId" element={<ProtectedRoute><NoteManager /></ProtectedRoute>} />
                    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
