/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { payOrder } from '../actions/orderActions';

import File from '../assets/svg/file';
import Load from '../assets/svg/load';
import Close from '../assets/svg/close';
import Loader from './loaders/Loader';

function Nequi({ order }) {
  const [load, setLoad] = useState(false);
  const [image, setImage] = useState('');
  const [img, setImg] = useState('');
  const [append, setAppend] = useState();

  const dispatch = useDispatch();

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(order._id, paymentResult));
  };

  const clearImage = () => {
    setImg(null);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoad(true);

    const formData = new FormData();
    formData.append('image', append);
    formData.append('order_id', order._id);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };

      const { data } = axios.post('/api/payments/add/', formData, config);

      setImage(data);
      successPaymentHandler(order);
    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      setLoad(false);
    }, 5000);
  };

  const uploadFileHandler = (e) => {
    const file = e.target.files[0];
    setAppend(file);
    setImg(URL.createObjectURL(file));
  };

  // useEffect(() => {
  //   if (success) {
  //     successPaymentHandler(order);
  //   }
  // }, [dispatch, success, order, successPaymentHandler]);

  //   const [status, setStatus] = useState(true);
  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-2 items-center">
      <span className="rounded-md bg-zinc-700/10 w-40 h-40 border-2 border-zinc-700 border-dashed flex items-center justify-center">
        {!img ? (
          <File className="fill-white/50 " />
        ) : (
          <span className="relative">
            <button
              type="button"
              onClick={clearImage}
              className="absolute top-0 right-0"
            >
              <Close className="fill-white/80 hover:fill-red-500/80" />
            </button>
            <img src={img} alt="file" className="w-36 h-36 object-cover" />
          </span>
        )}
      </span>
      {!img ? (
        <span>
          <input
            type="file"
            name="file"
            id="file"
            className="hidden sr-only"
            onChange={uploadFileHandler}
          />
          <label
            htmlFor="file"
            className="text-white/50 hover:text-white/80 underline text-xs font-medium cursor-pointer"
          >
            Subir Comprobante
          </label>
        </span>
      ) : (
        <button
          type="submit"
          className="text-xs text-white/80 hover:text-white py-1 w-[150px] bg-zinc-900 border rounded-md border-white/20"
        >
          {!load && (
            <h1 className="text-white/80 hover:text-white text-sm font-normal">
              Enviar
            </h1>
          )}
          {load && (
            <span className="flex justify-center ">
              <Loader color="#eee" size={20} />
            </span>
          )}
        </button>
      )}
    </form>
  );
}

export default Nequi;
