/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useNavigate, useParams } from 'react-router-dom';

import Shipping from '../assets/svg/fontawesome/cart';
import Load from '../assets/svg/load';
import Info from '../assets/svg/info';
import NequiIcon from '../assets/svg/logos/nequi';
import PayPal from '../components/PayPal';

import {
  getOrderDetails,
  payOrder,
  deliverOrder
} from '../actions/orderActions';
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET
} from '../constants/orderConstants';
import Nequi from '../components/Nequi';

function OrderPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const orderId = id;

  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState(0);

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, error, loading } = orderDetails;

  // console.log(order);

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (!loading && !error) {
    order.itemsPrice = order.orderItems
      .reduce((acc, item) => acc + item.price * item.qty, 0)
      .toFixed(2);
  }

  useEffect(() => {
    if (!userInfo) {
      navigate('auth/login');
    }

    if (
      !order ||
      successPay ||
      order._id !== Number(orderId) ||
      successDeliver
    ) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });

      dispatch(getOrderDetails(orderId));
    }

    if (!loading) {
      setSubtotal(order.itemsPrice);
      setShipping(order.shippingPrice);
      setTotal(order.totalPrice);
    }
  }, [
    dispatch,
    order,
    orderId,
    successPay,
    successDeliver,
    navigate,
    userInfo,
    loading
  ]);

  const itemsPriceCOP = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(subtotal);

  const shippingPriceCOP = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(shipping);

  const totalPriceCOP = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(total);

  const formatDate = (date) => {
    const d = new Date(date);
    const month = d.toLocaleString('default', { month: 'long' });
    const day = d.getDate();
    const year = d.getFullYear();
    return `${day} de ${month} ${year}`;
  };

  // console.log(order);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <section className="container lg:mx-auto xl:px-96 pt-8 h-full pb-56">
      <div className="border rounded-md border-white/20 bg-zinc-800 p-4">
        <div className="flex justify-between items-start">
          {!order.isPaid && (
            <span className="flex flex-row gap-1 items-center mb-5">
              <Shipping className="fill-amber-500 w-5" />
              <h1 className="text-amber-500 text-md font-bold">
                Pago Pendiente{' '}
                <span className="text-white/50 font-normal"># {order._id}</span>
              </h1>
            </span>
          )}
          {order.isPaid && (
            <span className="flex flex-row gap-1 items-center mb-5">
              <Shipping className="fill-emerald-500 w-5" />
              <h1 className="text-emerald-500 text-md font-bold">
                Pago Realizado{' '}
                <span className="text-white/50 font-normal"># {order._id}</span>
              </h1>
            </span>
          )}
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-sm text-white/80 hover:text-white font-normal underline"
          >
            Volver
          </button>
        </div>

        <h1 className="text-white/90 text-sm font-bold">
          Hola {order.user.name},
        </h1>
        {!order.isPaid && (
          <h1 className="text-white/90 text-sm">
            paga tu pedido para que podamos empezar a prepararlo.
          </h1>
        )}
        {order.isPaid && (
          <h1 className="text-white/90 text-sm">
            Gracias por tu compra, pronto te enviaremos tu pedido.
          </h1>
        )}
        <hr className="border-white/20 my-5" />
        <span className="grid grid-cols-4 gap-2">
          <h1 className="flex flex-col">
            <span className="text-white/90 text-sm font-bold">
              Fecha de pedido
            </span>
            <span className="text-white/90 text-sm">
              {formatDate(order.createdAt)}
            </span>
          </h1>
          <h1 className="flex flex-col">
            <span className="text-white/90 text-sm font-bold">
              Fecha de entrega
            </span>
            <span className="text-white/90 text-sm">Sin fecha de entrega</span>
          </h1>
          <h1 className="flex flex-col">
            <span className="text-white/90 text-sm font-bold">Dirección</span>
            <span className="text-white/90 text-sm">
              {order.shippingAddress.address}, {order.shippingAddress.city}
            </span>
          </h1>
          <h1 className="flex flex-col">
            <span className="text-white/90 text-sm font-bold">
              Método de pago
            </span>
            <span className="text-white/90 text-sm capitalize">
              {order.paymentMethod}
            </span>
          </h1>
        </span>
        <hr className="border-white/20 my-5" />
        <span>
          <div className="grid grid-cols-2 gap-2">
            {order.orderItems.map((item) => (
              <div key={item._id} className="flex flex-row gap-2 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover"
                />
                <div className="flex flex-col">
                  <h1 className="text-white/90 text-sm font-bold">
                    {item.name}
                  </h1>
                  <h1 className="text-white/90 text-sm">
                    {item.qty} x ${item.price}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </span>
        <hr className="border-white/20 my-5" />
        {!order.isPaid && (
          <div>
            {loadingPay && <Load />}
            {order.paymentMethod === 'paypal' && (
              <PayPal
                amount={order.totalPrice}
                orderPay={orderPay}
                orderDetails={orderDetails}
                orderId={orderId}
              />
            )}
            {order.paymentMethod === 'whatsapp' && (
              <>
                <h1 className="text-sm text-white">
                  Contacta con nosotros por whatsapp para realizar el pago.
                </h1>
                <hr className="border-white/20 my-5" />
              </>
            )}
            {order.paymentMethod === 'nequi' && (
              <>
                <div className="flex flex-col gap-2">
                  <span className="flex flex-row gap-1 items-center">
                    <Info className="fill-white/80" />
                    <h1 className="text-white/80 text-xs">
                      Por favor, envianos el comprobante de pago lo mas rapido
                      posible.
                    </h1>
                  </span>
                  <span className="flex flex-row gap-1 items-center">
                    <NequiIcon className="w-5 h-5" />
                    <h1 className="text-white/80 text-xs">
                      Numero de cuenta: 310 5008660
                    </h1>
                  </span>
                  <span className="flex justify-center items-center">
                    <Nequi order={order} />
                  </span>
                </div>
                <hr className="border-white/20 my-5" />
              </>
            )}
          </div>
        )}

        <div className="flex flex-col gap-2">
          <span className="flex justify-between">
            <h1 className="text-white/90 text-sm font-bold">Subtotal</h1>
            <h1 className="text-white/90 text-sm">
              {itemsPriceCOP.substring(0, itemsPriceCOP.length - 3)}
            </h1>
          </span>
          <span className="flex justify-between">
            <h1 className="text-white/90 text-sm font-bold">Gastos de envío</h1>
            <h1 className="text-white/90 text-sm">
              {' '}
              {shippingPriceCOP.substring(0, shippingPriceCOP.length - 3)}
            </h1>
          </span>
          <span className="flex justify-between">
            <h1 className="text-white/90 text-sm font-bold">Descuento</h1>
            <h1 className="text-white/90 text-sm">0%</h1>
          </span>
        </div>
        <hr className="border-white/20 my-5" />
        <span className="flex justify-between">
          <h1 className="text-white/90 text-sm font-bold">Total</h1>
          <h1 className="text-white/90 text-sm">
            {totalPriceCOP.substring(0, totalPriceCOP.length - 3)}
          </h1>
        </span>
        <hr className="border-white/20 my-5" />
        <span className="flex flex-col gap-4">
          <h1 className="text-white/80 text-sm font-bold">
            Gracias por su compra en Manganiacos!
          </h1>
          <span className="flex flex-col gap-2">
            <h1 className="text-white/80 text-sm">
              ¡Le enviaremos una confirmación de envío cuando sus mangas estén
              en camino! Apreciamos su compra y esperamos que disfrute de sus
              manga.
            </h1>
            <h1 className="text-white/80 text-sm">
              Si tiene alguna pregunta, no dude en contactarnos en
            </h1>
          </span>
        </span>
      </div>
    </section>
  );
}

export default OrderPage;
