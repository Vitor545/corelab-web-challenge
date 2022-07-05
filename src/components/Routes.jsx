import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Create from '../pages/Create';
import Edit from '../pages/Edit';
import Favorites from '../pages/Favorites';
import NotFound from '../pages/NotFound';

export default function RoutesApp() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/create" element={<Create />} />
      <Route exact path="/edit" element={<Edit />} />
      <Route exact path="/favorites" element={<Favorites />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
