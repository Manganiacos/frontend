/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { getUserDetails, updateUserProfile } from '../actions/userActions';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';
import { listMyOrders } from '../actions/orderActions';
import Search from '../assets/svg/search';

import Paypal from '../assets/svg/logos/paypal';
import Nequi from '../assets/svg/logos/nequi';
import Whatsapp from '../assets/svg/whatsapp';

import Check from '../assets/svg/check';
import Info from '../assets/svg/info';
import Shipping from '../assets/svg/shipping';

function OrdersPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  useEffect(() => {
    if (!userInfo) {
      navigate('auth/login');
    } else if (!user || !user.name || success || userInfo._id !== user._id) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(getUserDetails('profile'));
      dispatch(listMyOrders());
    } else {
      dispatch(listMyOrders());
      setName(user.name);
      setEmail(user.email);
    }
  }, [dispatch, navigate, userInfo, user, success]);

  // 24/2/2020 to format 24 February 2020
  const formatDate = (date) => {
    const d = new Date(date);
    const month = d.toLocaleString('default', { month: 'long' });
    const day = d.getDate();
    const year = d.getFullYear();
    return `${day} de ${month} ${year}`;
  };

  console.log(formatDate('2022-10-25T02:02:50.850204Z'));

  return (
    <section className="container mx-auto px-96 pt-8 pb-56">
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-4 flex flex-col gap-1">
          <h1 className="text-2xl text-white/80 font-bold">Tus Compras</h1>
          <h1 className="text-xs text-white/80 font-normal">
            Desde aquí puedes ver el estado de tus pedidos y gestionar tus
            devoluciones.
          </h1>
        </div>
        <div className="col-span-4 flex flex-col gap-2">
          <h1 className="text-white/80 text-sm">Busca tu pedido</h1>
          <span className="col-span-1 relative">
            <input
              type="text"
              placeholder="Buscar"
              className="relative pl-11 w-96 bg-zinc-800/80 placeholder:text-white/80 text-white rounded-md px-4 py-2 text-sm font-normal outline-none"
            />
            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 fill-white/80" />
          </span>
        </div>
        {loadingOrders ? (
          <h1>
            <span className="text-white/80 text-sm">Cargando...</span>
          </h1>
        ) : errorOrders ? (
          <h1>
            <span className="text-white/80 text-sm">{errorOrders}</span>
          </h1>
        ) : (
          <>
            {orders.map((order) => (
              <div
                key={order._id}
                className="col-span-2 border border-zinc-700 border-dashed rounded-md bg-black/30"
              >
                <div className="flex flex-col">
                  <span className="flex justify-between p-2 items-start">
                    <h1 className="text-sm font-normal tracking-wide flex flex-col">
                      <span className="text-white/80 ">Orden #{order._id}</span>
                      <span className="text-white/50 text-xs font-normal">
                        {formatDate(order.createdAt)}
                      </span>
                    </h1>
                    <Link
                      to={`/order/${order._id}`}
                      className="text-white/80 text-xs font-normal underline hover:text-white cursor-pointer"
                    >
                      Ver
                    </Link>
                  </span>
                  <hr className="border-1 border-zinc-700 border-dashed" />
                  <div className="flex flex-col gap-1 px-2 py-2">
                    <h1 className="text-white/80 text-sm font-normal underline">
                      Información de contacto
                    </h1>
                    <h1 className="text-white/80 text-sm font-normal">
                      Usuario: {order.user.name}
                    </h1>
                    <h1 className="text-white/80 text-sm font-normal">
                      Email: {order.user.email}
                    </h1>
                    <h1 className="text-white/80 text-sm font-normal">
                      Teléfono: {order.shippingAddress.phone}
                    </h1>
                  </div>
                  <hr className="border-1 border-zinc-700 border-dashed" />
                  <div className="flex flex-col gap-1 px-2 py-2">
                    <h1 className="text-white/80 text-sm font-normal underline">
                      Información de envío
                    </h1>
                    <h1 className="text-white/80 text-sm font-normal">
                      Dirección: {order.shippingAddress.address},{' '}
                      {order.shippingAddress.city},{' '}
                      {order.shippingAddress.postalCode}
                    </h1>
                  </div>
                  <hr className="border-1 border-zinc-700 border-dashed" />
                  <div className="flex flex-col gap-1 px-2 py-2">
                    <h1 className="text-white/80 text-sm font-normal underline">
                      Método de pago
                    </h1>
                    <span>
                      <h1 className="text-white/80 text-sm font-normal capitalize flex flex-row gap-1 items-center">
                        {order.paymentMethod === 'paypal' && (
                          <Paypal className="fill-white/80 w-4" />
                        )}
                        {order.paymentMethod === 'whatsapp' && (
                          <Whatsapp className="fill-white/80 w-4" />
                        )}
                        {order.paymentMethod === 'nequi' && (
                          <Nequi className="fill-white/80 w-4 h-4" />
                        )}
                        {order.paymentMethod}
                      </h1>
                    </span>
                    <h1 className="text-white/80 text-sm font-normal">
                      Gastos de envío: $ {order.shippingPrice}
                    </h1>
                    <h1 className="text-white/80 text-sm font-normal">
                      Total: $ {order.totalPrice}
                    </h1>
                  </div>
                  <hr className="border-1 border-zinc-700 border-dashed" />
                  <div className="flex flex-col gap-1 px-2 py-2">
                    <h1 className="text-white/80 text-sm font-normal underline">
                      Estado del pedido
                    </h1>
                    <span className="flex flex-col gap-2">
                      <h1 className="text-white/80 text-sm font-normal capitalize flex flex-row gap-1 items-center">
                        {order.isPaid ? (
                          <Check className="fill-green-500" />
                        ) : (
                          <Info className="fill-amber-500" />
                        )}
                        {order.isPaid ? 'Pago Completado' : 'Pago pendiente'}
                      </h1>
                      <h1 className="text-white/80 text-sm font-normal capitalize flex flex-row gap-1 items-center">
                        {order.isDelivered ? (
                          <Check className="fill-green-500" />
                        ) : (
                          <Shipping className="fill-amber-500" />
                        )}
                        {order.isDelivered ? (
                          'Entregado'
                        ) : (
                          <>
                            {order.isPaid ? 'En Camino' : 'En espera de pago'}
                          </>
                        )}
                      </h1>
                    </span>
                  </div>
                  <hr className="border-1 border-zinc-700 border-dashed" />
                  <div className="flex flex-col gap-1 px-2 py-2">
                    <h1 className="text-white/80 text-sm font-normal underline">
                      Productos
                    </h1>
                    <div className="grid grid-cols-4 gap-3">
                      {order.orderItems.map((item) => (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-md object-cover"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
}

export default OrdersPage;
