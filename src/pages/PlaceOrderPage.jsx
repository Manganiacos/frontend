/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

import Info from '../assets/svg/info';
import Load from '../assets/svg/load';

function PlaceOrderPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const total = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
  const shipping = cartItems.length > 0 ? 12000 : 0;
  const totalPrice = total + shipping;

  // cart.itemsPrice = new Intl.NumberFormat('es-CO', {
  //   style: 'currency',
  //   currency: 'COP'
  // }).format(total);

  // cart.shippingPrice = new Intl.NumberFormat('es-CO', {
  //   style: 'currency',
  //   currency: 'COP'
  // }).format(shipping);

  // cart.totalPrice = new Intl.NumberFormat('es-CO', {
  //   style: 'currency',
  //   currency: 'COP'
  // }).format(total + shipping);

  useEffect(() => {
    if (!cart.paymentMethod) {
      navigate('/cart/payment');
    }
  }, [navigate, dispatch, cart.paymentMethod]);

  return (
    <>
      <SEO title="Resumen de la orden" />

      <section className="h-full w-full pb-56">
        <div className="flex flex-col gap-6">
          <h1 className="flex justify-between items-center">
            <span className="flex flex-col gap-1">
              <h1 className="text-2xl text-white/80 font-bold">
                Resumen de la orden
              </h1>
              <h1 className="text-sm text-white/80">
                Revisa los detalles de tu orden
              </h1>
            </span>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex items-center gap-1"
            >
              <span className="text-sm text-white/80 hover:text-white font-normal underline">
                Volver atras
              </span>
            </button>
          </h1>
          <h1 className="flex flex-row gap-4 items-start text-xs text-white/80">
            <Info className="fill-white/80" />
            <span className="flex flex-col gap-3">
              <h1>El envio tiene un costo de $12.000</h1>
              <h1>
                Por la compra de 3 mangas o mas el envio es gratis en todo el
                pais
              </h1>
            </span>
          </h1>
        </div>
        <div className="mt-8">
          <div className="flex flex-col gap-2">
            <div>
              <h1 className="text-white/80 text-sm font-bold">
                Direccion de Contacto
              </h1>
              <h1 className="text-white/80 text-sm font-normal capitalize">
                {cart.shippingAddress.address}, {cart.shippingAddress.city},{' '}
                {cart.shippingAddress.postalCode},{' '}
                {cart.shippingAddress.country}
              </h1>
            </div>
            <div>
              <h1 className="text-white/80 text-sm font-bold">
                Telefono de Contacto
              </h1>
              <h1 className="text-white/80 text-sm font-normal">
                {cart.shippingAddress.phone}
              </h1>
            </div>
            <div>
              <h1 className="text-white/80 text-sm font-bold">
                Método de pago
              </h1>
              <h1 className="text-white/80 text-sm font-normal capitalize">
                {cart.paymentMethod === 'paypal' &&
                  'El pago se realizara mediante paypal'}
                {cart.paymentMethod === 'whatsapp' &&
                  'El vendendor se pondra en contacto contigo por whatsapp'}
              </h1>
            </div>
            <div>
              <h1 className="text-white/80 text-sm font-bold">Mensaje</h1>
              <h1 className="text-white/80 text-sm font-normal capitalize">
                {cart.shippingAddress.message}
              </h1>
            </div>
          </div>
          <hr className="my-4 border-white/20" />
          <div className="flex flex-col gap-6">
            <span className="flex justify-between">
              <h1 className="text-white/80 text-sm font-bold">
                Manga(s) seleccionada(s)
              </h1>
              <Link
                to="/cart"
                className="text-white/80 text-sm font-normal underline hover:text-white"
              >
                Edita tu orden
              </Link>
            </span>
            <span className="grid grid-cols-3 gap-4">
              {cartItems.map((item) => (
                <div className="flex flex-row gap-4 items-start">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-white/80 text-xs font-bold">
                      {item.name} Vol. {item.volume}
                    </h1>
                    <h1 className="text-white/80 text-xs font-normal">
                      {item.qty} x {item.price}
                    </h1>
                  </div>
                </div>
              ))}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlaceOrderPage;
