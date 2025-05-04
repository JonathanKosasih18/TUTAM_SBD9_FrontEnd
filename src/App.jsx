import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Tasks from './pages/Tasks';
import Login from './pages/Login';
import Register from './pages/Register';
import Create from './pages/Create';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/user/login" />} />
          <Route path="/task" element={<Tasks />} />
          <Route path="/task/create" element={<Create />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
