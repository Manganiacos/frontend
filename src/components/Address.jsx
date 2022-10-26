/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { AnimatePresence, motion, useCycle } from 'framer-motion';

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
          >
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-60 bg-zinc-900 rounded-md p-8">
              <div className="flex justify-between">
                <span className="flex flex-col gap-1">
                  <h1 className="text-white text-lg font-normal">
                    Elige dónde recibir tus compras
                  </h1>
                  <h1 className="text-white text-xs font-normal">
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
                    className="py-12 flex flex-row gap-6"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="flex flex-col gap-2 relative">
                        <select
                          selected={country || ''}
                          value={country || ''}
                          onChange={(e) => setCountry(e.target.value)}
                          className="relative pl-11 w-full bg-zinc-800/80 placeholder:text-white/80 text-white rounded-md px-4 py-2 text-sm font-normal outline-none"
                          placeholder="País"
                        >
                          <option disabled value="">
                            Seleccione el país
                          </option>
                          <option value="Colombia">Colombia</option>
                        </select>
                        <Map className="fill-white absolute top-1/2 left-3 transform -translate-y-1/2" />
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="flex flex-col gap-2 relative">
                        <select
                          selected={city || ''}
                          value={city || ''}
                          onChange={(e) => setCity(e.target.value)}
                          className="relative pl-11 w-full bg-zinc-800/80 placeholder:text-white/80 text-white rounded-md px-4 py-2 text-sm font-normal outline-none"
                          placeholder="Ciudad"
                        >
                          <option disabled value="">
                            Indique su ciudad
                          </option>
                          <option value="Aguachica">Aguachica</option>
                          <option value="Apartado">Apartadó</option>
                          <option value="Arauca">Arauca</option>
                          <option value="Armenia">Armenia</option>
                          <option value="Barrancabermeja">
                            Barrancabermeja
                          </option>
                          <option value="Barranquilla">Barranquilla</option>
                          <option value="Bello">Bello</option>
                          <option value="Bogotá">Bogotá D.C.</option>
                          <option value="Bucaramanga">Bucaramanga</option>
                          <option value="Buenaventura">Buenaventura</option>
                          <option value="Buga">Buga</option>
                          <option value="Cali">Cali</option>
                          <option value="Cartago">Cartago</option>
                          <option value="Cartagena">Cartagena</option>
                          <option value="Caucasia">Caucasia</option>
                          <option value="Cerete">Cereté</option>
                          <option value="Chia">Chia</option>
                          <option value="Cienaga">Ciénaga</option>
                          <option value="Cucuta">Cúcuta</option>
                          <option value="Dosquebradas">Dosquebradas</option>
                          <option value="Duitama">Duitama</option>
                          <option value="Envigado">Envigado</option>
                          <option value="Facatativa">Facatativá</option>
                          <option value="Florencia">Florencia</option>
                          <option value="Floridablanca">Floridablanca</option>
                          <option value="Fusagasuga">Fusagasugá</option>
                          <option value="Girardot">Girardot</option>
                          <option value="Giron">Girón</option>
                          <option value="Ibague">Ibagué</option>
                          <option value="Ipiales">Ipiales</option>
                          <option value="Itagui">Itagüí</option>
                          <option value="Jamundi">Jamundí</option>
                          <option value="Lorica">Lorica</option>
                          <option value="Los Patios">Los Patios</option>
                          <option value="Magangue">Magangué</option>
                          <option value="Maicao">Maicao</option>
                          <option value="Malambo">Malambo</option>
                          <option value="Manizales">Manizales</option>
                          <option value="Medellin">Medellín</option>
                          <option value="Melgar">Melgar</option>
                          <option value="Monteria">Montería</option>
                          <option value="Neiva">Neiva</option>
                          <option value="Ocana">Ocaña</option>
                          <option value="Paipa">Paipa</option>
                          <option value="Palmira">Palmira</option>
                          <option value="Pamplona">Pamplona</option>
                          <option value="Pasto">Pasto</option>
                          <option value="Pereira">Pereira</option>
                          <option value="Piedecuesta">Piedecuesta</option>
                          <option value="Pitalito">Pitalito</option>
                          <option value="Popayan">Popayán</option>
                          <option value="Quibdo">Quibdó</option>
                          <option value="Riohacha">Riohacha</option>
                          <option value="Rionegro">Rionegro</option>
                          <option value="Sabanalarga">Sabanalarga</option>
                          <option value="Sahagun">Sahagún</option>
                          <option value="Santa Marta">Santa Marta</option>
                          <option value="Sincelejo">Sincelejo</option>
                          <option value="Soacha">Soacha</option>
                          <option value="Sogamoso">Sogamoso</option>
                          <option value="Soledad">Soledad</option>
                          <option value="Tibu">Tibú</option>
                          <option value="Tulua">Tuluá</option>
                          <option value="Tumaco">Tumaco</option>
                          <option value="Tunja">Tunja</option>
                          <option value="Turbo">Turbo</option>
                          <option value="Valledupar">Valledupar</option>
                          <option value="Villa de Leyva">Villa de leyva</option>
                          <option value="Villa del Rosario">
                            Villa del Rosario
                          </option>
                          <option value="Villavicencio">Villavicencio</option>
                          <option value="Yopal">Yopal</option>
                          <option value="Zipaquira">Zipaquirá</option>
                        </select>
                        <City className="fill-white absolute top-1/2 left-3 transform -translate-y-1/2" />
                      </span>
                    </div>
                    <button
                      type="submit"
                      className="text-xs text-white px-3 border rounded-md border-white/20 bg-zinc-800 w-40 flex justify-center items-center"
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
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Address;
