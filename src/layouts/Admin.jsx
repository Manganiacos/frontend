/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import {
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
  useLocation
} from 'react-router-dom';

import More from '../assets/svg/plus';
import Tienda from '../assets/svg/tienda';
import Analytics from '../assets/svg/analytics';

import Dashboard from '../pages/admin/DashboardAdmin';
import InventoryAdmin from '../pages/admin/InventoryAdmin';
import MessagesAdmin from '../pages/admin/MessagesAdmin';
import AnalyticsAdmin from '../pages/admin/AnalyticsAdmin';
import OrdersAdmin from '../pages/admin/OrdersAdmin';
import ProfileAdmin from '../pages/admin/ProfileAdmin';

import Persona from '../assets/svg/persona';
import Cerrar from '../assets/svg/cerrar';
import Inventory from '../assets/svg/inventory';
import Chat from '../assets/svg/chat';
import Orde from '../assets/svg/orde';

function Admin() {
  return (
    <section className="grid grid-cols-8 gap-4 container mx-auto mt-12 h-screen">
      <div className="col-span-2 flex">
        <section className="flex flex-col w-[300px] border border-l-0 border-t-0 border-b-0 h-[470px] border-zinc-800">
          <div className="flex flex-col gap-4 px-4 py-4">
            <span className="flex flex-row justify-between items-center">
              <h1 className=" text-white/70 text-sm font-light uppercase tracking-wider">
                Negocio
              </h1>
              <More className="fill-white/80" />
            </span>
            <Link
              to="/admin/"
              className="flex flex-row gap-2 items-center capitalize text-xs text-white/80 cursor-pointer"
            >
              <Tienda className="fill-white/80" />
              <h1 className=" text-white/70 text-sm font-normal ">Tienda</h1>
            </Link>
            <Link
              to="/admin/analytics"
              className="flex flex-row gap-2 items-center capitalize text-xs text-white/80 cursor-pointer"
            >
              <Analytics className="fill-white/80" />
              <h1 className=" text-white/70 text-sm font-normal ">
                Analiticas de ventas
              </h1>
            </Link>
          </div>
          <hr className="border-zinc-800" />
          <div className="flex flex-col gap-4 px-4 py-4">
            <span className="flex flex-row justify-between items-center">
              <h1 className=" text-white/70 text-sm font-light uppercase tracking-wider">
                Menú
              </h1>
              <More className="fill-white/80" />
            </span>
            <Link
              to="/admin/inventory"
              className="flex flex-row gap-2 items-center capitalize text-xs text-white/80 cursor-pointer"
            >
              <Inventory className="fill-white/80" />
              <h1 className=" text-white/70 text-sm font-normal ">
                Inventario
              </h1>
            </Link>
            <Link
              to="/admin/orders"
              className="flex flex-row gap-2 items-center capitalize text-xs text-white/80  cursor-pointer"
            >
              <Orde className="fill-white/80" />
              <h1 className=" text-white/70 text-sm font-normal ">Ordenes</h1>
            </Link>
            <Link
              to="/admin/messages"
              className="flex flex-row gap-2 items-center capitalize text-xs text-white/80  cursor-pointer"
            >
              <Chat className="fill-white/80" />
              <h1 className=" text-white/70 text-sm font-normal ">Mensajes</h1>
            </Link>
          </div>
          <hr className="border-zinc-800" />
          <div className="flex flex-col gap-4 px-4 py-4">
            <span className="flex flex-row justify-between items-center">
              <h1 className=" text-white/70 text-sm font-light uppercase tracking-wider">
                Configuración
              </h1>
              <More className="fill-white/80" />
            </span>
            <Link
              to="/admin/profile"
              className="flex justify-between gap-2 items-center capitalize text-xs text-white/80  cursor-pointer"
            >
              <span className="flex flex-row gap-2 items-center">
                <Persona className="fill-white/80" />
                <h1 className=" text-white/70 text-sm font-normal">Perfil</h1>
              </span>
              <h1 className=" text-white/70 text-[10px] font-normal border-[1px] border-white/50 rounded-full px-2">
                @user
              </h1>
            </Link>
            <Link
              to="/admin/"
              className="flex flex-row gap-2 items-center capitalize text-xs text-white/80  cursor-pointer"
            >
              <Cerrar className="fill-white/80" />
              <h1 className=" text-white/70 text-sm font-normal ">
                Cerrar sesión
              </h1>
            </Link>
          </div>
        </section>
      </div>
      <div className="col-span-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="analytics" element={<AnalyticsAdmin />} />
          <Route path="inventory" element={<InventoryAdmin />} />
          <Route path="orders" element={<OrdersAdmin />} />
          <Route path="messages" element={<MessagesAdmin />} />
          <Route path="profile" element={<ProfileAdmin />} />
        </Routes>
      </div>
    </section>
  );
}

export default Admin;
