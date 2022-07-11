import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Create from '../pages/Create';
import Edit from '../pages/Edit';
import Filter from '../pages/Filter';
import '../styles/styles.css';
import Favorites from '../pages/Favorites';
import NotFound from '../pages/NotFound';
import Search from './Search';
import SearchFIlter from './SearchFIlter';

export default function RoutesApp() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/create" element={<Create />} />
      <Route exact path="/search/:values" element={<Search />} />
      <Route exact path="/searchFilter/:values" element={<SearchFIlter />} />
      <Route exact path="/edit/:ids" element={<Edit />} />
      <Route exact path="/filter" element={<Filter />} />
      <Route exact path="/favorites" element={<Favorites />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
