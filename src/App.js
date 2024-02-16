import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Layout from './layouts/Layout'
import Register from './pages/auth/register/Register';
import './App.css'
import Login from './pages/auth/login/Login';
import VerifyEmail from './pages/auth/verify-email/EmailVerification';

const App = () => {
  const PrivateRoute = () => {
    const isAuthenticated = localStorage.getItem('accessToken');
    return isAuthenticated ? <Outlet /> : <Navigate to="/login"/>;
  };

  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Layout />}>
        </Route>
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify-email/:id/:token" element={<VerifyEmail />} />
    </Routes>
  );
};

export default App;

