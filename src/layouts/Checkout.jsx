/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import {
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
  useLocation
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { createOrder } from '../actions/orderActions';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';

import { addToCart } from '../actions/cartActions';
import ArrowRight from '../assets/svg/arrowRight';
import Cupon from '../assets/svg/cupon';
import Load from '../assets/svg/load';

import CartPage from '../pages/CartPage';
import ShippingPage from '../pages/ShippingPage';
import PaymentPage from '../pages/PaymentPage';
import PlaceOrderPage from '../pages/PlaceOrderPage';
import Steps from '../components/steps/Steps';

function Checkout() {
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, order, error, success } = orderCreate;
  const [formData, setFormData] = useState(false);

  const params = useParams();

  const location = useLocation();

  const [locate, setLocate] = useState(location.pathname);

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  // console.log(cart);

  const total = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
  const shipping = cartItems.length > 0 ? 12000 : 0;
  const totalPrice = total + shipping;

  cart.itemsPrice = cart.cartItems
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  cart.shippingPrice = (cartItems.length > 0 ? 12000 : 0).toFixed(2);

  cart.totalPrice = (
    Number(cart.itemsPrice) + Number(cart.shippingPrice)
  ).toFixed(2);

  const itemsPriceCOP = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(total);

  const shippingPriceCOP = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(shipping);

  const totalPriceCOP = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(total + shipping);

  useEffect(() => {
    setLocate(location.pathname);
    if (cartItems.length === 0) {
      navigate('/cart');
    }
    if (params.id) {
      dispatch(addToCart(params.id, qty));
    }
    if (success) {
      navigate(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [
    dispatch,
    params.id,
    qty,
    location.pathname,
    cartItems,
    success,
    navigate,
    order,
    cart.paymentMethod
  ]);

  const placeOrder = (e) => {
    e.preventDefault();
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        totalPrice: cart.totalPrice
      })
    );
    setTimeout(() => {
      setFormData(true);
    }, 100);
  };

  return (
    <>
      {locate === '/cart/shipping' && <Steps step1 step2 />}
      {locate === '/cart/payment' && <Steps step1 step2 step3 />}
      {locate === '/cart/placeorder' && <Steps step1 step2 step3 step4 />}
      <section className="container mx-auto xl:px-56 px-8 h-full pt-8">
        <div className="grid grid-cols-4 gap-6">
          <div className="xl:col-span-3 col-span-4">
            <Routes>
              <Route path="/" element={<CartPage />} />
              <Route path="/:id" element={<CartPage />} />
              <Route path="/shipping" element={<ShippingPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/placeorder" element={<PlaceOrderPage />} />
            </Routes>
          </div>
          <div className="xl:col-span-1 col-span-4 flex flex-col gap-4">
            {!userInfo ? (
              <Link
                to="/auth/login"
                className="text-center xl:text-sm text-xs text-white/80 hover:text-white py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
              >
                <span className="flex flex-row gap-1 justify-center items-center">
                  <h1>Iniciar Sesión / Crear Cuenta</h1>
                </span>
              </Link>
            ) : (
              <>
                {locate === '/cart/placeorder' && (
                  <button
                    type="button"
                    disabled={cart.cartItems === 0}
                    onClick={placeOrder}
                    className="text-center xl:text-sm text-xs text-white/80 hover:text-white py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
                  >
                    {!formData && (
                      <h1 className="text-white/80 hover:text-white text-sm font-normal">
                        Realizar Pedido
                      </h1>
                    )}
                    {formData && (
                      <span className="flex justify-center ">
                        <Load className="fill-white/80 animate-spin" />
                      </span>
                    )}
                  </button>
                )}

                {/* {step && (
                  <button
                    type="button"
                    onClick={shippingHandler}
                    className="text-center text-sm text-white/80 hover:text-white py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
                  >
                    <span className="flex flex-row gap-1 justify-center items-center">
                      <h1>Paso 2: Dirección de envío</h1>
                      <ArrowRight className="fill-white/80" />
                    </span>
                  </button>
                )} */}
              </>
            )}
            <span className="xl:text-sm text-xs text-white/80 hover:text-white py-1 px-2 border rounded-md border-white/20 bg-zinc-800">
              <span className="flex flex-row justify-between items-center">
                <h1 className="flex flex-row xl:gap-1 gap-2 items-center">
                  <Cupon className="fill-white/80" />
                  Cupon de Descuento
                </h1>
                <ArrowRight className="fill-white/80 rotate-90" />
              </span>
            </span>
            <span className="flex flex-col gap-2 text-white/80 py-1 px-2 border rounded-md border-white/20 bg-zinc-800">
              <span className="flex flex-row justify-between items-center">
                <h1 className="text-sm">Resumen</h1>
                <ArrowRight className="fill-white/80 -rotate-90" />
              </span>
              <hr className="border-white/20" />
              <span className="flex flex-row justify-between items-center">
                <h1 className="text-xs">
                  Subtotal de (
                  {cartItems.reduce((acc, item) => acc + item.qty, 0)}) Mangas:
                </h1>
                <h1 className="text-xs">
                  {itemsPriceCOP.substring(0, itemsPriceCOP.length - 3)}
                </h1>
              </span>
              <span className="flex flex-row justify-between items-center">
                <h1 className="text-xs">Gastos de Envío:</h1>
                <h1 className="text-xs">
                  {shippingPriceCOP.substring(0, shippingPriceCOP.length - 3)}
                </h1>
              </span>
              {locate === '/cart/payment' && (
                <>
                  <span className="flex flex-row justify-between items-center">
                    <h1 className="text-xs">Dirección de Envío:</h1>
                    <h1 className="text-xs">{cart.shippingAddress.address}</h1>
                  </span>
                </>
              )}
              {locate === '/cart/placeorder' && (
                <>
                  <span className="flex flex-row justify-between items-center">
                    <h1 className="text-xs">Dirección de Envío:</h1>
                    <h1 className="text-xs">{cart.shippingAddress.address}</h1>
                  </span>
                  <span className="flex flex-row justify-between items-center">
                    <h1 className="text-xs">Método de pago:</h1>
                    <h1 className="text-xs capitalize">{cart.paymentMethod}</h1>
                  </span>
                </>
              )}
              <hr className="border-white/20" />
              <span className="flex flex-row justify-between items-center">
                <h1 className="text-xs">Total:</h1>
                <h1 className="text-xs">
                  {' = '}
                  {totalPriceCOP.substring(0, totalPriceCOP.length - 3)}
                </h1>
              </span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
