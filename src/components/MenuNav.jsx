/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';
// import Logout from './Logout';
import { logout } from '../actions/userActions';
import Address from './Address';

import MenuB from '../assets/svg/menuB';
import CloseB from '../assets/svg/closeB';
import Logout from '../assets/svg/logout';

function MenuNav({ path, socialMedia }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [show, setShow] = useCycle(false, true);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    if (userInfo) {
      navigate('/auth/login');
    }
    setShow(false);
  };

  const open = () => {
    setShow();
  };

  if (show) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
  return (
    <>
      <button type="button" onClick={open}>
        <MenuB className="fill-white/60 hover:fill-white/80" />
      </button>
      <AnimatePresence exitBeforeEnter>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/50 fixed top-0 left-0 w-screen h-screen z-[70]"
            style={{
              backdropFilter: 'blur(5px)'
            }}
          >
            <motion.span
              initial={{
                x: '-100vh',
                opacity: 0
              }}
              animate={{
                x: '0vh',
                opacity: 1
              }}
              transition={{ duration: 0.5 }}
              exit={{ x: '-100vh', opacity: 0, backgroundColor: 'transparent' }}
              className="fixed top-0 left-0 w-screen h-screen z-[70]"
            >
              <section className="absolute bg-zinc-900 top-0 left-0 flex h-full w-full flex-col justify-between">
                <div className="flex flex-col gap-8 px-8 py-6">
                  <span className="flex justify-between w-full items-center">
                    <button type="button" onClick={open}>
                      <CloseB className="fill-white/60 hover:fill-white/80" />
                    </button>
                    <button type="button" className="z-[10]">
                      {userInfo ? <Address /> : <></>}
                    </button>
                  </span>
                  <div className="flex flex-col gap-2">
                    <h1>sdsd</h1>
                  </div>
                </div>
                <div className="flex flex-col">
                  <hr className="border-zinc-800" />
                  <div className="flex flex-col gap-3 py-4 px-8 w-full">
                    <span className="flex flex-row gap-4 justify-between">
                      {path.map((item) => (
                        <span
                          key={item.id}
                          className="flex flex-row gap-1 items-center"
                        >
                          {item.icon}
                          <h1 className="text-white/80 font-normal text-xs">
                            {item.link}
                          </h1>
                        </span>
                      ))}
                    </span>
                    <span span className="flex flex-row gap-4 justify-between">
                      {socialMedia.map((item) => (
                        <span
                          key={item.id}
                          className="flex flex-row gap-1 items-center"
                        >
                          {item.icon}
                          <h1 className="text-white/80 font-normal text-xs">
                            {item.name}
                          </h1>
                        </span>
                      ))}
                    </span>
                  </div>
                  <hr className="border-zinc-800" />
                  <div className="px-8 py-4">
                    {userInfo ? (
                      <button
                        type="button"
                        onClick={logoutHandler}
                        className="gap-1 flex text-xs text-white py-1 px-2 border rounded-md border-white/20 bg-zinc-800 w-full justify-center items-center"
                      >
                        <Logout className="fill-white/60 hover:fill-white/80" />
                        <h1 className="text-white/80 hover:text-white text-xs">
                          Cerrar Sesión
                        </h1>
                      </button>
                    ) : (
                      <Link
                        to="/auth/register"
                        onClick={open}
                        className="gap-1 flex text-xs text-white/80 hover:text-white py-1 px-2 border rounded-md border-white/20 bg-zinc-800 w-full justify-center items-center"
                      >
                        Iniciar Sesión / Crear Cuenta
                      </Link>
                    )}
                  </div>
                </div>
              </section>
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MenuNav;
