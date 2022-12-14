/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../actions/userActions';

import Category from './Category';
import MenuC from '../assets/svg/menu';
import MenuB from '../assets/svg/menuB';

import Location from '../assets/svg/location';
import More from '../assets/svg/more';
import Contact from '../assets/svg/contact';
import Faq from '../assets/svg/faq';
import About from '../assets/svg/about';
// import Search from '../assets/svg/search';
import Info from '../assets/svg/info';

import Whatsapp from '../assets/svg/whatsapp';
import Facebook from '../assets/svg/facebook';

import Address from './Address';
import CartShop from './CartShop';
import Logout from './Logout';

import logo from '../assets/img/logo.jpg';
import Search from './Search';
import SearchB from '../assets/svg/searchB';
import MenuNav from './MenuNav';

function Navbar() {
  const location = useLocation();
  const [isOpen, setOpen] = useCycle(false, true);

  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const path = [
    {
      id: 1,
      link: <Link to="/contact">Contacto</Link>,
      icon: <Contact className="fill-white/80" />
    },
    {
      id: 2,
      link: <Link to="/about">Acerca de Nosotros</Link>,
      icon: <About className="fill-white/80" />
    },
    {
      id: 3,
      link: <Link to="/faq">FAQ</Link>,
      icon: <Faq className="fill-white/80" />
    }
  ];

  const socialMedia = [
    {
      id: 1,
      name: 'Ayuda',
      icon: <Info className="fill-white/80" />
    },
    {
      id: 2,
      name: 'Whatsapp',
      icon: <Whatsapp className="fill-white/80" />
    },
    {
      id: 3,
      name: 'Facebook',
      icon: <Facebook className="fill-white/80" />
    }
  ];

  return (
    <>
      <section className="w-full hidden xl:block">
        <div className="flex justify-between pt-8 items-center container mx-auto px-8 xl:px-0">
          <span className="flex flex-row gap-8">
            {path.map((item) => (
              <span key={item.id} className="flex flex-row gap-1 items-center">
                {item.icon}
                <h1 className="text-white/80 font-normal text-xs">
                  {item.link}
                </h1>
              </span>
            ))}
          </span>
          <span className="flex flex-row gap-4">
            {socialMedia.map((item) => (
              <span key={item.id} className="flex flex-row gap-1 items-center">
                {item.icon}
                <h1 className="text-white/80 font-normal text-xs">
                  {item.name}
                </h1>
              </span>
            ))}
          </span>
        </div>
        <div className="grid grid-cols-3 py-4 items-center container mx-auto px-8 xl:px-0">
          <Link
            to="/"
            className="col-span-3 xl:col-span-1 flex flex-row gap-4 justify-start items-center"
          >
            <img
              src={logo}
              alt="logo"
              className="w-12 object-cover rounded-full"
            />
            <h1 className="text-3xl text-white font-bold">Manganiacos</h1>
          </Link>
          <span className="col-span-3 xl:col-span-1">
            <Search />
          </span>
          <span className="col-span-3 xl:col-span-1 flex flex-row gap-4 justify-end items-center">
            {userInfo ? (
              <Logout />
            ) : (
              <Link
                to="/auth/register"
                className="text-xs text-white py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
              >
                Iniciar Sesi??n / Crear Cuenta
              </Link>
            )}
            <span className="relative">
              <CartShop />
              <h1
                style={{ fontSize: '10px' }}
                className="rounded-full border border-white/20 bg-zinc-800 text-white/80 flex font-normal justify-center absolute px-1.5 py-0.5 top-0 left-3.5"
              >
                {cartItems.reduce((acc, item) => acc + item.qty, 0)}
              </h1>
            </span>
          </span>
        </div>
        <hr className="border-zinc-800" />
        <div className="grid grid-cols-3 py-3 items-center container mx-auto px-8 xl:px-0">
          <Category />

          <span className="col-span-3 xl:col-span-1 flex flex-row gap-8 justify-center">
            <Link to="/store" className="text-sm text-white">
              Los m??s vendidos
            </Link>
            <Link to="/store" className="text-sm text-white">
              Pr??ximamente
            </Link>
            <Link to="/store" className="text-sm text-white">
              Nuevos lanzamientos
            </Link>
          </span>
          <span className="z-[10]">{userInfo ? <Address /> : <></>}</span>
        </div>
      </section>

      <Menu as="div">
        {({ open }) => (
          <>
            <section className="w-full xl:hidden block">
              <div className="flex justify-between px-8 py-4 items-center bg-black/30">
                <div className="flex">
                  <MenuNav path={path} socialMedia={socialMedia} />
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Menu.Button
                    type="button"
                    className="focus:outline-none"
                    onClick={open}
                  >
                    <SearchB className="fill-white/60 hover:fill-white/80" />
                  </Menu.Button>
                  <span className="relative">
                    <CartShop />
                    <h1
                      style={{ fontSize: '10px' }}
                      className="rounded-full border border-white/20 bg-zinc-800 text-white/80 flex font-normal justify-center absolute px-1.5 py-0.5 top-0 left-3.5"
                    >
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                    </h1>
                  </span>
                </div>
              </div>
              <AnimatePresence exitBeforeEnter>
                <Menu.Items>
                  {open && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 1,
                        transition: { duration: 0.5, ease: 'easeInOut' }
                      }}
                      animate={{
                        height: 'auto'
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        transition: {
                          duration: 0.5,
                          ease: 'easeInOut',
                          delay: 0.3
                        }
                      }}
                    >
                      <div className="bg-black/30 px-8 pb-4">
                        <Search />
                      </div>
                    </motion.div>
                  )}
                </Menu.Items>
              </AnimatePresence>
            </section>
          </>
        )}
      </Menu>
    </>
  );
}

export default Navbar;
