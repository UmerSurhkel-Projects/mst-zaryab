import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Layout from './layouts/Layout'
import Register from './pages/auth/register/Register';
import './App.css'
import Login from './pages/auth/login/Login';
import VerifyEmail from './pages/auth/verify-email/EmailVerification';
import Settings from './pages/settings/Settings';
import Main from './components/main/Main'
import Contacts from './pages/contacts/Contacts';
import Chat from './components/chats/Chat';
import RightSidebar from './components/sidebar/RightSidebar';

const App = () => {
  const PrivateRoute = () => {
    const isAuthenticated = localStorage.getItem('accessToken');
    return isAuthenticated ? <Outlet /> : <Navigate to="/login"/>;
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<PrivateRoute />}>
          <Route index element={<Main />} />
          <Route path="settings" element={<Settings />} />
          <Route path="contacts" element={<Contacts/>} />
          <Route path="/contacts/:contactId" element={<Chat/>} />
          <Route path="/contacts/:contactId" element={<RightSidebar/>} />

        </Route>
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify-email/:id/:token" element={<VerifyEmail />} />
    </Routes>
  );
};

export default App;

