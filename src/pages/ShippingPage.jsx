/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { saveShippingAddress } from '../actions/cartActions';

import Load from '../assets/svg/load';
import Info from '../assets/svg/info';
import Direction from '../assets/svg/direction';
import Phone from '../assets/svg/phone';
import Map from '../assets/svg/map';
import Zip from '../assets/svg/zip';
import City from '../assets/svg/city';
import SEO from '../components/SEO';

function ShippingPage() {
  const [formData, setFormData] = useState(false);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [phone, setPhone] = useState(shippingAddress.phone);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const [message, setMessage] = useState(shippingAddress.message);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        address,
        city,
        phone,
        postalCode,
        country,
        message
      })
    );
    setTimeout(() => {
      setFormData(false);
    }, 1000);
    navigate('/cart/payment');
  };

  useEffect(() => {
    if (shippingAddress.address) {
      setAddress(shippingAddress.address);
      setCity(shippingAddress.city);
      setPhone(shippingAddress.phone);
      setPostalCode(shippingAddress.postalCode);
      setCountry(shippingAddress.country);
      setMessage(shippingAddress.message);
    }
  }, [shippingAddress]);

  return (
    <>
      <SEO title="Información de envío" />
      <section className="h-full w-full pb-56">
        <div className="flex flex-col gap-6">
          <h1 className="flex justify-between items-center">
            <span className="flex flex-col gap-1">
              <h1 className="text-2xl text-white/80 font-bold">
                Información de envío
              </h1>
              <h1 className="text-sm text-white/80">
                Por favor, ingresa tus datos de envío
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
                Por la compra de 3 mangas o mas el envio es gratis en todo el
                pais
              </h1>
            </span>
          </h1>
          <form onSubmit={submitHandler} className="grid grid-cols-4 gap-6">
            <span className="col-span-2 flex flex-row gap-2 relative">
              <input
                type="text"
                id="address"
                name="address"
                value={address || ''}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Dirección"
                className="relative pl-11 w-full bg-zinc-800/80 placeholder:text-white/80 text-white rounded-md px-4 py-2 text-sm font-normal outline-none"
              />
              <Direction className="absolute top-1/2 left-3 transform -translate-y-1/2 fill-white/80" />
            </span>
            <span className="col-span-2 flex flex-row gap-2 relative">
              <input
                type="number"
                id="phone"
                name="phone"
                maxLength={10}
                value={phone || ''}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Teléfono +57"
                className="relative pl-11 w-full bg-zinc-800/80 placeholder:text-white/80 text-white rounded-md px-4 py-2 text-sm font-normal outline-none"
              />
              <Phone className="absolute top-1/2 left-3 transform -translate-y-1/2 fill-white/80" />
            </span>
            <span className="col-span-1 flex flex-row gap-2 relative">
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
            <span className="col-span-1 flex flex-row gap-2 relative">
              <input
                id="postalCode"
                name="postalCode"
                type="number"
                value={postalCode || ''}
                onChange={(e) => setPostalCode(e.target.value)}
                placeholder="Código Postal"
                className="relative pl-11 w-full bg-zinc-800/80 placeholder:text-white/80 text-white rounded-md px-4 py-2 text-sm font-normal outline-none"
              />
              <Zip className="absolute top-1/2 left-3 transform -translate-y-1/2 fill-white/80" />
            </span>
            <span className="col-span-2 flex flex-row gap-2 relative">
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
                <option value="Barrancabermeja">Barrancabermeja</option>
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
                <option value="Villa del Rosario">Villa del Rosario</option>
                <option value="Villavicencio">Villavicencio</option>
                <option value="Yopal">Yopal</option>
                <option value="Zipaquira">Zipaquirá</option>
              </select>
              <City className="fill-white absolute top-1/2 left-3 transform -translate-y-1/2" />
            </span>
            <span className="col-span-4 flex justify-center gap-2 relative">
              <textarea
                style={{
                  resize: 'none'
                }}
                id="message"
                name="message"
                rows="3"
                value={message || ''}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Eje: Quiero que me contacten"
                className="relative w-full bg-zinc-800/80 placeholder:text-white/80 text-white rounded-md px-4 py-2 text-sm font-normal outline-none"
              />
            </span>
            <hr className="col-span-4 border-white/40 rounded-full" />
            <span className="col-span-4 flex justify-center gap-2 relative">
              {
                (address,
                city,
                phone,
                postalCode,
                country,
                message ? (
                  <button
                    type="submit"
                    className="text-xs text-white px-3 py-2 border rounded-md border-white/20 bg-zinc-800 w-64 flex justify-center items-center"
                  >
                    {!formData && (
                      <h1 className="text-white/80 hover:text-white text-sm font-normal">
                        Siguiente paso (Método de pago)
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
                        Siguiente paso (Método de pago)
                      </h1>
                    )}
                    {formData && (
                      <span className="flex justify-center ">
                        <Load className="fill-white/80 animate-spin" />
                      </span>
                    )}
                  </button>
                ))
              }
            </span>
          </form>
        </div>
      </section>
    </>
  );
}

export default ShippingPage;
