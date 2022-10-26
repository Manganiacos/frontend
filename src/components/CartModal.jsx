/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Minus from '../assets/svg/minus';
import Plus from '../assets/svg/plus';
import Delete from '../assets/svg/delete';

import { addToCart, removeFromCart } from '../actions/cartActions';

function CartModal(props) {
  const { product } = props;
  const [qty, setQty] = useState(product.qty);

  const total = product.qty * product.price;

  const price = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(total);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const incremenateQty = () => {
    if (qty < product.countInStock) {
      setQty(qty + 1);
    }
  };
  const decrementQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  useEffect(() => {
    dispatch(addToCart(product.product, qty));
  }, [dispatch, qty, product.product]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <>
      <div className="col-span-2 flex flex-row gap-4 items-center">
        <Link to={`/product/${product.product}`}>
          <img
            src={product.image}
            alt={product.name}
            className="relative rounded-md w-[80px] h-[100px] object-cover"
          />
        </Link>
        <span className="flex flex-col gap-1">
          <h1 className="text-white/80 text-sm font-bold uppercase w-44">
            {product.name} Vol. {product.volume}
          </h1>
          <h1 className="text-white/80 text-xs font-bold">
            {price.substring(0, price.length - 3)}
          </h1>
          <h1 className="text-white/80 text-xs font-bold">
            Editorial {product.editorial}
          </h1>
          <h1 className="text-white/80 text-xs font-bold">
            {product.category}
          </h1>
        </span>
      </div>
      <div className="col-span-1 flex flex-row gap-2 justify-center items-center">
        <span className="flex flex-row">
          <button
            type="button"
            onClick={decrementQty}
            id="decrement"
            className="px-1 border fill-white border-white/20 bg-zinc-800 rounded-l-md border-r-0"
          >
            <Minus />
          </button>
          <button
            type="button"
            className="px-3 border border-white/20 bg-zinc-800 border-l-0 border-r-0"
          >
            <span className="text-white text-xs">{qty}</span>
          </button>
          <button
            type="button"
            onClick={incremenateQty}
            id="increment"
            className="px-1 border fill-white border-white/20 bg-zinc-800 rounded-r-md border-l-0"
          >
            <Plus />
          </button>
        </span>
        <span className="flex justify-center">
          <button onClick={() => removeFromCartHandler(product.product)}>
            <Delete className="fill-white/80 active:fill-[#C94E4E]" />
          </button>
        </span>
      </div>
    </>
  );
}

export default CartModal;
