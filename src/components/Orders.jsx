/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Paypal from '../assets/svg/logos/paypal';
import Nequi from '../assets/svg/logos/nequi';
import Whatsapp from '../assets/svg/whatsapp';

import Check from '../assets/svg/check';
import Info from '../assets/svg/info';
import Shipping from '../assets/svg/shipping';

function Orders({ order }) {
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const formatDate = (date) => {
    const d = new Date(date);
    const month = d.toLocaleString('default', { month: 'long' });
    const day = d.getDate();
    const year = d.getFullYear();
    return `${day} de ${month} ${year}`;
  };

  useEffect(() => {
    setSubtotal(order.itemsPrice);
    setTotal(order.totalPrice);
    setShipping(order.shippingPrice);
  }, [order]);

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

  return (
    <div className="border border-zinc-700 border-dashed rounded-md bg-black/30">
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
            {order.shippingAddress.city}, {order.shippingAddress.postalCode}
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
            Gastos de envío:{' '}
            {shippingPriceCOP.substring(0, shippingPriceCOP.length - 3)}
          </h1>
          <h1 className="text-white/80 text-sm font-normal">
            Total: {totalPriceCOP.substring(0, totalPriceCOP.length - 3)}
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
                <>{order.isPaid ? 'En Camino' : 'En espera de pago'}</>
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
                key={item}
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-md object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
