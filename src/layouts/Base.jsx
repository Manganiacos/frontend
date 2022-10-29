/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import Navbar from '../components/Navbar';
import StorePage from '../pages/StorePage';
import ProductPage from '../pages/ProductPage';
import Checkout from './Checkout';
import OrdersPage from '../pages/OrdersPage';
import OrderPage from '../pages/OrderPage';

import FavoritePage from '../pages/FavoritePage';

import LoginPageAuth from '../pages/auth/LoginPageAuth';
import RegisterPageAuth from '../pages/auth/RegisterPageAuth';

import TestPage from '../pages/TestPage';

function Base() {
  return (
    <main className="bg-zinc-900 h-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/cart/*" element={<Checkout />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/order/:id" element={<OrderPage />} />
          <Route path="/auth/login" element={<LoginPageAuth />} />
          <Route path="/auth/register" element={<RegisterPageAuth />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default Base;
