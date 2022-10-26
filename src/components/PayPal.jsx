/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { payOrder } from '../actions/orderActions';

import Load from '../assets/svg/load';

function PayPal({ amount, orderDetails, orderPay, orderId }) {
  const [sdkReady, setSdkReady] = useState(false);
  const paypal = useRef();
  const dispatch = useDispatch();

  console.log(orderPay);

  //   console.log(amount);

  const COP = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(amount);

  // 1 COP = 0,00031 USD

  const USD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
    .format(amount * 0.00031)
    .replace('$', '');

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(orderId, paymentResult));
  };

  const addPayPalScript = () => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      'https://www.paypal.com/sdk/js?client-id=AUlZGrq17oqQ9KitqYB2vSweGDlikwndRM5670ST1pphAloxv-JKmmEtGSXNRfaji7Y0W9oJD1L2LI7V';
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
    };
    document.body.appendChild(script);
  };

  const createOrder = (data, actions) =>
    actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: USD
          }
        }
      ]
    });

  const onApprove = async (data, actions) => {
    const order = await actions.order.capture();
    successPaymentHandler(order);
  };

  useEffect(() => {
    if (!orderPay.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
        window.paypal
          .Buttons({
            createOrder,
            onApprove
          })
          .render(paypal.current);
      }
    }
  }, [createOrder]);

  return (
    <div>
      {sdkReady ? (
        <div ref={paypal} />
      ) : (
        <div className="flex items-center justify-center">
          <Load />
        </div>
      )}
    </div>
  );
}

export default PayPal;
