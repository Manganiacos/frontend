/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { AnimatePresence, motion, useCycle } from 'framer-motion';

import {
  Select,
  SelectItem,
  SelectPopover,
  useSelectState
} from 'ariakit/select';

import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import Map from '../assets/svg/map';
import City from '../assets/svg/city';
import Location from '../assets/svg/location';
import More from '../assets/svg/more';
import Close from '../assets/svg/close';
import Load from '../assets/svg/load';

function Address() {
  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;
  // console.log(shippingAddress);
  const [show, setShow] = useCycle(false, true);

  const [city, setCity] = useState(shippingAddress.city);
  const [country, setCountry] = useState(shippingAddress.country);

  const selectCity = useSelectState({
    defaultValue: shippingAddress.city,
    sameWidth: true,
    loop: true,
    autoSelect: true,
    autoSelectOnBlur: true,
    gutter: 4
  });

  const selectCountry = useSelectState({
    defaultValue: shippingAddress.country,
    sameWidth: true,
    loop: true,
    autoSelect: true,
    autoSelectOnBlur: true,
    gutter: 4
  });

  useEffect(() => {
    // console.log(selectCity.value);
    setCity(selectCity.value);
    setCountry(selectCountry.value);
  }, [selectCity, selectCountry]);

  if (show) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  const ciudad = shippingAddress.city;
  const pais = shippingAddress.country;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const [formData, setFormData] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(formData);
    dispatch(
      saveShippingAddress({
        address: shippingAddress.address,
        city,
        phone: shippingAddress.phone,
        postalCode: shippingAddress.postalCode,
        country,
        message: shippingAddress.message
      })
    );
    setTimeout(() => {
      setShow(false);
    }, 100);
  };

  const open = () => {
    setShow();
  };

  // const cityHandler = () => {
  //   console.log(selectCity.value);
  // };

  return (
    <section className="flex relative col-span-1 justify-end z-[40]">
      <button type="button" onClick={open} className="flex flex-row gap-1">
        <Location className="fill-white" />
        <h1 className="text-sm text-white font-normal">
          {userInfo && ciudad && pais
            ? `Enviar a ${
                pais.charAt(0).toUpperCase() + pais.slice(1)
              }, ${ciudad}`
            : 'Ingresa tu Ubicación'}
        </h1>
        <More className="fill-white" />
      </button>
      <AnimatePresence exitBeforeEnter>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/50"
            style={{
              backdropFilter: 'blur(5px)'
            }}
          >
            <>
              <section className="w-full">
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:w-[700px] w-full xl:h-60 xl:bg-zinc-900 rounded-md xl:px-8 xl:py-8 px-8 py-4">
                  <div className="flex flex-col xl:gap-0 gap-4 xl:px-0 px-6 xl:py-0 py-4 xl:bg-none bg-zinc-900 rounded-md">
                    <div className="flex justify-between items-start">
                      <span className="flex flex-col gap-1 w-full items-start">
                        <h1 className="text-white xl:text-lg text-sm font-normal">
                          Elige dónde recibir tus compras
                        </h1>
                        <h1 className="text-white xl:text-xs text-[11px] font-normal">
                          Ingresa tu dirección para enviar tu pedido
                        </h1>
                      </span>
                      <button type="button" onClick={setShow}>
                        <Close className="fill-white/50 hover:fill-white" />
                      </button>
                    </div>
                    <div>
                      {!userInfo ? (
                        <div className="flex justify-center items-center w-full h-32">
                          <Link
                            to="/auth/login"
                            onClick={setShow}
                            className="text-center text-sm text-white/80 hover:text-white py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
                          >
                            <span className="flex flex-row gap-1 justify-center items-center">
                              <h1>Iniciar Sesión / Crear Cuenta</h1>
                            </span>
                          </Link>
                        </div>
                      ) : (
                        <form
                          onSubmit={submitHandler}
                          className="xl:py-12 py-4 flex xl:flex-row flex-col xl:gap-6 gap-4"
                        >
                          <div className="flex flex-col gap-1">
                            <span className="flex flex-col gap-2 relative z-[2]">
                              <Select
                                state={selectCountry}
                                className="capitalize h-8 pl-12 text-sm text-white px-3 border rounded-md border-white/20 bg-zinc-800 xl:w-[200px] w-full flex justify-between items-center"
                              />
                              <Map className="fill-white absolute top-1/2 left-3 transform -translate-y-1/2" />
                              <SelectPopover
                                state={selectCountry}
                                className="relative overflow-hidden border rounded-md border-white/20 bg-zinc-800 flex flex-col gap-1 text-sm text-white"
                              >
                                <SelectItem
                                  className="select-item"
                                  value="Seleccione el país"
                                  disabled
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Colombia"
                                />
                              </SelectPopover>
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="flex flex-col gap-2 relative w-full">
                              <Select
                                state={selectCity}
                                className="h-8 pl-12 text-sm text-white px-3 border rounded-md border-white/20 bg-zinc-800 xl:w-[200px] w-full flex justify-between items-center"
                              />
                              <City className="fill-white absolute top-1/2 left-3 transform -translate-y-1/2" />
                              <SelectPopover
                                state={selectCity}
                                className="overflow-y-scroll no-scrollbar h-56 w-full relative overflow-hidden border rounded-md border-white/20 bg-zinc-800 flex flex-col gap-1 text-sm text-white"
                              >
                                <SelectItem
                                  className="select-item"
                                  value="Indique su ciudad"
                                  disabled
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Aguachica"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Apartado"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Arauca"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Armenia"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Barrancabermeja"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Barranquilla"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Bello"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Bogotá"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Bucaramanga"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Buenaventura"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Buga"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Cali"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Cartago"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Cartagena"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Caucasia"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Cerete"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Chia"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Cienaga"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Cucuta"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Dosquebradas"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Duitama"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Envigado"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Facatativa"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Florencia"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Floridablanca"
                                />

                                <SelectItem
                                  className="select-item"
                                  value="Fusagasuga"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Girardot"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Giron"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Ibague"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Ipiales"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Itagui"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Jamundi"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Lorica"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Los Patios"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Magangue"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Maicao"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Malambo"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Manizales"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Medellin"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Melgar"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Monteria"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Neiva"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Ocana"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Paipa"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Palmira"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Pamplona"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Pasto"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Pereira"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Piedecuesta"
                                />

                                <SelectItem
                                  className="select-item"
                                  value="Pitalito"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Popayan"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Quibdo"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Riohacha"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Rionegro"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Sabanalarga"
                                />

                                <SelectItem
                                  className="select-item"
                                  value="Sahagun"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Santa Marta"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Sincelejo"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Soacha"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Sogamoso"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Soledad"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Tibu"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Tulua"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Tumaco"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Tunja"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Turbo"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Valledupar"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Villa de Leyva"
                                />

                                <SelectItem
                                  className="select-item"
                                  value="Villa del Rosario"
                                />

                                <SelectItem
                                  className="select-item"
                                  value="Villavicencio"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Yopal"
                                />
                                <SelectItem
                                  className="select-item"
                                  value="Zipaquira"
                                />
                              </SelectPopover>
                            </span>
                          </div>
                          <button
                            type="submit"
                            className="w-full text-xs text-white px-3 py-1 border rounded-md border-white/20 bg-zinc-800 flex justify-center items-center"
                            // className="text-xs text-white px-3 border rounded-md border-white/20 bg-zinc-800 w-40 flex justify-center items-center"
                          >
                            {!formData && (
                              <h1 className="text-white/80 hover:text-white text-sm font-normal">
                                Guardar cambios
                              </h1>
                            )}
                            {formData && (
                              <span className="flex justify-center ">
                                <Load className="fill-white/80 animate-spin" />
                              </span>
                            )}
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Address;
