import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout'
import Main from './components/main/Main';
import Register from './pages/auth/register/Register';
import './App.css'
import Login from './pages/auth/login/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/home" element={<Main />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
