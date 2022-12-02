/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from '../actions/cartActions';
import Info from '../assets/svg/info';
import SEO from '../components/SEO';

import CartProducts from '../components/CartProducts';

import Mall from '../assets/svg/mall';
import ArrowRight from '../assets/svg/arrowRight';

function CartPage() {
  const params = useParams();

  const location = useLocation();

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { loading, error, cartItems } = cart;
  // console.log(cartItems);

  useEffect(() => {
    if (params.id) {
      dispatch(addToCart(params.id, qty));
    }
  }, [dispatch, params.id, qty]);

  const total = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);

  const price = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(total);

  const shippingHandler = () => {
    if (userInfo) {
      navigate('/cart/shipping');
    } else {
      navigate('/auth/login');
    }
  };
  return (
    <>
      <SEO title="Carrito de compras" />

      <section className="h-full w-full">
        <div className="flex flex-col gap-6">
          <h1 className="flex justify-between xl:items-center items-center">
            <span className="flex flex-col gap-1 ">
              <h1 className="xl:text-2xl text-lg text-white/80 font-bold">
                Mi Carrito de compras
              </h1>
              <h1 className="xl:text-sm text-xs text-white/80">
                Revisa y confirma tu orden
              </h1>
            </span>
            <Link
              to="/store"
              className="xl:text-sm text-xs text-white/80 hover:text-white font-normal underline"
            >
              Volver a la tienda
            </Link>
          </h1>
          <h1 className="flex flex-row xl:gap-4 gap-2 items-start text-xs text-white/80">
            <Info className="fill-white/80" />
            <span className="flex flex-col gap-3 w-full">
              <h1>El envio tiene un costo de $12.000</h1>
              <h1>
                Por la compra de 3 mangas o mas el envio es gratis en todo el
                pais
              </h1>
            </span>
          </h1>
          <span className="flex flex-col gap-2">
            <span className="flex justify-between items-center">
              <h1 className="xl:text-md text-sm text-white/80">Mis Mangas</h1>
              {cartItems.length > 0 && (
                <button
                  type="button"
                  onClick={shippingHandler}
                  className="text-center xl:text-sm text-xs text-white/80 hover:text-white py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
                >
                  <span className="flex flex-row gap-1 justify-center items-center">
                    <h1>Ir al proceso de pago</h1>
                  </span>
                </button>
              )}
            </span>
            <hr className="border-zinc-800 rounded-full" />
          </span>
          {/* <hr className="border-white/20 rounded-full" /> */}
          {cartItems.length === 0 ? (
            <div className="grid place-items-center gap-4 h-auto xl:py-8 py-16 xl:mb-56 mb-0">
              <div className="border border-dashed rounded-full p-8 border-white/20 bg-zinc-800">
                <Mall className="fill-white/20" />
              </div>
              <h1 className="text-center xl:text-sm text-xs font-normal text-white/80">
                Su carrito está vacío
              </h1>
              <Link
                to="/store"
                className="xl:text-sm text-xs text-white/80 hover:text-white py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
              >
                Empezar a Comprar
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {cartItems.map((product) => (
                <div className="col-span-1 flex flex-col gap-4">
                  <CartProducts product={product} />
                  <hr className="border-white/20 rounded-full" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default CartPage;
