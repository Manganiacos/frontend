/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { savePaymentMethod } from '../actions/cartActions';

import Info from '../assets/svg/info';
import Paypal from '../assets/svg/logos/paypal';
import Nequi from '../assets/svg/logos/nequi';
import Whatsapp from '../assets/svg/whatsapp';
import Load from '../assets/svg/load';

function PaymentPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(false);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();

  const [paymentMethod, setPaymentMethod] = useState('');

  const handleChange = (e) => {
    // const newData = e.target.value;
    // console.log(e.target.value);
    setPaymentMethod(e.target.value);
    const idPaypal = document.getElementById('paypalId');
    const idWhatsapp = document.getElementById('whatsappId');
    const idNequi = document.getElementById('nequiId');
    if (e.target.value === 'paypal') {
      idPaypal.classList.add('bg-gray-900');
    } else {
      idPaypal.classList.remove('bg-gray-900');
    }
    if (e.target.value === 'whatsapp') {
      idWhatsapp.classList.add('bg-green-900');
    } else {
      idWhatsapp.classList.remove('bg-green-900');
    }
    if (e.target.value === 'nequi') {
      idNequi.classList.add('bg-indigo-900');
    } else {
      idNequi.classList.remove('bg-indigo-900');
    }
  };

  console.log(paymentMethod);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    setTimeout(() => {
      setFormData(false);
    }, 1000);
    navigate('/cart/placeorder');
  };

  return (
    <section className="h-full w-full pb-56">
      <div className="flex flex-col gap-6">
        <h1 className="flex justify-between items-center">
          <span className="flex flex-col gap-1">
            <h1 className="text-2xl text-white/80 font-bold">
              Información de Pago
            </h1>
            <h1 className="text-sm text-white/80">
              Por favor, seleccione su método de pago
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
              Por la compra de 3 mangas o mas el envio es gratis en todo el pais
            </h1>
          </span>
        </h1>
      </div>
      <form onSubmit={submitHandler} className="grid grid-cols-3 gap-4 mt-8">
        <span className="inline-block radio">
          <input
            name="paypal"
            type="radio"
            id="paypal"
            value="paypal"
            onClick={(e) => {
              handleChange(e);
            }}
          />
          <label
            htmlFor="paypal"
            id="paypalId"
            className="cursor-pointer flex flex-row gap-2 w-full px-4 py-2 justify-center items-center border border-white/20 hover:border-white/40 rounded-lg"
          >
            <Paypal className="fill-white/80 w-4" />
            <h1 className="text-white/80 hover:text-white text-sm">
              Pagar via Paypal
            </h1>
          </label>
        </span>
        <span className="inline-block radio">
          <input
            name="whatsapp"
            type="radio"
            id="whatsapp"
            value="whatsapp"
            onClick={(e) => {
              handleChange(e);
            }}
          />
          <label
            htmlFor="whatsapp"
            id="whatsappId"
            className="cursor-pointer flex flex-row gap-2 w-full px-4 py-2 justify-center items-center border border-white/20 hover:border-white/40 rounded-lg"
          >
            <Whatsapp className="fill-white/80 w-4" />
            <h1 className="text-white/80 hover:text-white text-sm">
              Contactar via Whatsapp
            </h1>
          </label>
        </span>
        <span className="inline-block radio">
          <input
            name="nequi"
            type="radio"
            id="nequi"
            value="nequi"
            onClick={(e) => {
              handleChange(e);
            }}
          />
          <label
            htmlFor="nequi"
            id="nequiId"
            className="cursor-pointer flex flex-row gap-2 w-full px-4 py-2 justify-center items-center border border-white/20 hover:border-white/40 rounded-lg"
          >
            <Nequi className="fill-white/80 w-5 h-5" />
            <h1 className="text-white/80 hover:text-white text-sm">
              Pagar via Nequi
            </h1>
          </label>
        </span>
        {paymentMethod ? (
          <button
            type="submit"
            className="cursor-pointer text-xs text-white px-3 py-2 border rounded-md border-white/20 bg-zinc-800 w-64 flex justify-center items-center"
          >
            {!formData && (
              <h1 className="text-white/80 hover:text-white text-sm font-normal">
                Siguiente paso (Realizar pedido)
              </h1>
            )}
            {formData && (
              <span className="flex justify-center ">
                <Load className="fill-white/80 animate-spin" />
              </span>
            )}
          </button>
        ) : (
          <button
            type="submit"
            disabled
            className="text-xs text-white px-3 py-2 border rounded-md border-white/20 bg-zinc-800 w-64 flex justify-center items-center"
          >
            {!formData && (
              <h1 className="text-white/80 text-sm font-normal">
                Siguiente paso (Realizar pedido)
              </h1>
            )}
            {formData && (
              <span className="flex justify-center ">
                <Load className="fill-white/80 animate-spin" />
              </span>
            )}
          </button>
        )}
      </form>
    </section>
  );
}

export default PaymentPage;
