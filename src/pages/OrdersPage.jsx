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
import Orders from '../components/Orders';
import SEO from '../components/SEO';
import Loader from '../components/loaders/Loader';

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
  // console.log(formatDate('2022-10-25T02:02:50.850204Z'));

  return (
    <>
      <SEO title="Mis Compras" />
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
            <div className="col-span-4 flex justify-center items-center h-[300px] w-full">
              <Loader color="#eee" size={80} />
            </div>
          ) : errorOrders ? (
            <h1>
              <span className="text-white/80 text-sm">{errorOrders}</span>
            </h1>
          ) : (
            <>
              {orders.map((order) => (
                <div key={order._id} className="col-span-2">
                  <Orders order={order} />
                </div>
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default OrdersPage;
