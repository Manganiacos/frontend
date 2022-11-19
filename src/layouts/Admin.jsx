/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
  useLocation
} from 'react-router-dom';

import { getUserDetails, logout } from '../actions/userActions';
import More from '../assets/svg/plus';
import Tienda from '../assets/svg/tienda';
import Analytics from '../assets/svg/analytics';

import Dashboard from '../pages/admin/DashboardAdmin';
import InventoryAdmin from '../pages/admin/InventoryAdmin';
import MessagesAdmin from '../pages/admin/MessagesAdmin';
import AnalyticsAdmin from '../pages/admin/AnalyticsAdmin';
import OrdersAdmin from '../pages/admin/OrdersAdmin';
import ProfileAdmin from '../pages/admin/ProfileAdmin';
import EditProductAdmin from '../pages/admin/EditProductAdmin';

import Persona from '../assets/svg/persona';
import Cerrar from '../assets/svg/cerrar';
import Inventory from '../assets/svg/inventory';
import Chat from '../assets/svg/chat';
import Orde from '../assets/svg/orde';

function Admin() {
  const [show, setShow] = useCycle(false, true);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const open = () => {
    setShow();
  };

  if (show) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  const logoutHandler = () => {
    dispatch(logout());
    if (userInfo) {
      navigate('/auth/login');
    }
    setShow();
  };

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      console.log('Admin');
    } else {
      navigate('/');
    }
  }, [dispatch, navigate, userInfo]);

  return (
    <>
      <section className="grid grid-cols-8 gap-4 container mx-auto mt-12 pb-96">
        <div className="col-span-2 flex">
          <section className="flex flex-col w-[300px] border border-l-0 border-t-0 border-b-0  border-zinc-800">
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
                <h1 className=" text-white/70 text-sm font-normal ">
                  Mensajes
                </h1>
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
                  @{user && user.name}
                </h1>
              </Link>
              <button
                type="button"
                onClick={open}
                className="flex flex-row gap-2 items-center capitalize text-xs text-white/80  cursor-pointer"
              >
                <Cerrar className="fill-white/80" />
                <h1 className=" text-white/70 text-sm font-normal ">
                  Cerrar sesión
                </h1>
              </button>
            </div>
          </section>
        </div>
        <div className="col-span-6">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route
              path="inventory/product/:id/edit"
              element={<EditProductAdmin />}
            />
            <Route path="analytics" element={<AnalyticsAdmin />} />
            <Route path="inventory" element={<InventoryAdmin />} />
            <Route path="orders" element={<OrdersAdmin />} />
            <Route path="messages" element={<MessagesAdmin />} />
            <Route path="profile" element={<ProfileAdmin />} />
          </Routes>
        </div>
      </section>
      <AnimatePresence exitBeforeEnter>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/50"
            style={{
              backdropFilter: 'blur(5px)'
            }}
          >
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-48 bg-zinc-900 rounded-md p-8">
              <div className="flex flex-col gap-6">
                <span className="flex flex-col gap-4">
                  <h1 className="text-md font-bold text-white/80">
                    Seguro que quieres cerrar sesión?
                  </h1>
                  <p className="text-sm text-white/80">
                    Si cierras sesión, tendrás que volver a introducir tus
                    credenciales la próxima vez que inicies sesión.
                  </p>
                </span>
                <span className="flex flex-row gap-2 justify-end">
                  <button
                    type="button"
                    onClick={setShow}
                    className="py-1 px-2 border rounded-md border-white/20 bg-zinc-800 cursor-pointer flex flex-row gap-1 "
                  >
                    <h1 className="text-white/80 text-sm">Cancelar</h1>
                  </button>
                  <button
                    type="button"
                    onClick={logoutHandler}
                    className="py-1 px-2 border rounded-md border-white/20 bg-zinc-800 cursor-pointer flex flex-row gap-1 "
                  >
                    <h1 className="text-red-500/80 text-sm">Cerrar sesión</h1>
                  </button>
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Admin;
