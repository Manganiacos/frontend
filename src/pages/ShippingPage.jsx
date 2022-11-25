/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  Select,
  SelectItem,
  SelectPopover,
  useSelectState
} from 'ariakit/select';

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
    setCity(selectCity.value);
    setCountry(selectCountry.value);
  }, [selectCity, selectCountry]);

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
            <div className="col-span-1 flex flex-row gap-2 relative">
              <span className="flex flex-col gap-2 relative z-[1] w-full">
                <Select
                  state={selectCountry}
                  className="capitalize h-9 pl-12 text-sm text-white px-3 rounded-md bg-zinc-800 w-full flex justify-between items-center"
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
                  <SelectItem className="select-item" value="Colombia" />
                </SelectPopover>
              </span>
            </div>
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
            <div className="col-span-2 flex flex-row gap-2 relative">
              <span className="flex flex-col gap-2 relative z-[1] w-full">
                <Select
                  state={selectCity}
                  className="h-9 pl-12 text-sm text-white px-3 rounded-md bg-zinc-800 w-full flex justify-between items-center"
                />
                <City className="fill-white absolute top-1/2 left-3 transform -translate-y-1/2" />
                <SelectPopover
                  state={selectCity}
                  className="overflow-y-scroll no-scrollbar h-56 relative overflow-hidden border rounded-md border-white/20 bg-zinc-800 flex flex-col gap-1 text-sm text-white"
                >
                  <SelectItem
                    className="select-item"
                    value="Indique su ciudad"
                    disabled
                  />
                  <SelectItem className="select-item" value="Aguachica" />
                  <SelectItem className="select-item" value="Apartado" />
                  <SelectItem className="select-item" value="Arauca" />
                  <SelectItem className="select-item" value="Armenia" />
                  <SelectItem className="select-item" value="Barrancabermeja" />
                  <SelectItem className="select-item" value="Barranquilla" />
                  <SelectItem className="select-item" value="Bello" />
                  <SelectItem className="select-item" value="Bogotá" />
                  <SelectItem className="select-item" value="Bucaramanga" />
                  <SelectItem className="select-item" value="Buenaventura" />
                  <SelectItem className="select-item" value="Buga" />
                  <SelectItem className="select-item" value="Cali" />
                  <SelectItem className="select-item" value="Cartago" />
                  <SelectItem className="select-item" value="Cartagena" />
                  <SelectItem className="select-item" value="Caucasia" />
                  <SelectItem className="select-item" value="Cerete" />
                  <SelectItem className="select-item" value="Chia" />
                  <SelectItem className="select-item" value="Cienaga" />
                  <SelectItem className="select-item" value="Cucuta" />
                  <SelectItem className="select-item" value="Dosquebradas" />
                  <SelectItem className="select-item" value="Duitama" />
                  <SelectItem className="select-item" value="Envigado" />
                  <SelectItem className="select-item" value="Facatativa" />
                  <SelectItem className="select-item" value="Florencia" />
                  <SelectItem className="select-item" value="Floridablanca" />

                  <SelectItem className="select-item" value="Fusagasuga" />
                  <SelectItem className="select-item" value="Girardot" />
                  <SelectItem className="select-item" value="Giron" />
                  <SelectItem className="select-item" value="Ibague" />
                  <SelectItem className="select-item" value="Ipiales" />
                  <SelectItem className="select-item" value="Itagui" />
                  <SelectItem className="select-item" value="Jamundi" />
                  <SelectItem className="select-item" value="Lorica" />
                  <SelectItem className="select-item" value="Los Patios" />
                  <SelectItem className="select-item" value="Magangue" />
                  <SelectItem className="select-item" value="Maicao" />
                  <SelectItem className="select-item" value="Malambo" />
                  <SelectItem className="select-item" value="Manizales" />
                  <SelectItem className="select-item" value="Medellin" />
                  <SelectItem className="select-item" value="Melgar" />
                  <SelectItem className="select-item" value="Monteria" />
                  <SelectItem className="select-item" value="Neiva" />
                  <SelectItem className="select-item" value="Ocana" />
                  <SelectItem className="select-item" value="Paipa" />
                  <SelectItem className="select-item" value="Palmira" />
                  <SelectItem className="select-item" value="Pamplona" />
                  <SelectItem className="select-item" value="Pasto" />
                  <SelectItem className="select-item" value="Pereira" />
                  <SelectItem className="select-item" value="Piedecuesta" />

                  <SelectItem className="select-item" value="Pitalito" />
                  <SelectItem className="select-item" value="Popayan" />
                  <SelectItem className="select-item" value="Quibdo" />
                  <SelectItem className="select-item" value="Riohacha" />
                  <SelectItem className="select-item" value="Rionegro" />
                  <SelectItem className="select-item" value="Sabanalarga" />

                  <SelectItem className="select-item" value="Sahagun" />
                  <SelectItem className="select-item" value="Santa Marta" />
                  <SelectItem className="select-item" value="Sincelejo" />
                  <SelectItem className="select-item" value="Soacha" />
                  <SelectItem className="select-item" value="Sogamoso" />
                  <SelectItem className="select-item" value="Soledad" />
                  <SelectItem className="select-item" value="Tibu" />
                  <SelectItem className="select-item" value="Tulua" />
                  <SelectItem className="select-item" value="Tumaco" />
                  <SelectItem className="select-item" value="Tunja" />
                  <SelectItem className="select-item" value="Turbo" />
                  <SelectItem className="select-item" value="Valledupar" />
                  <SelectItem className="select-item" value="Villa de Leyva" />

                  <SelectItem
                    className="select-item"
                    value="Villa del Rosario"
                  />

                  <SelectItem className="select-item" value="Villavicencio" />
                  <SelectItem className="select-item" value="Yopal" />
                  <SelectItem className="select-item" value="Zipaquira" />
                </SelectPopover>
              </span>
            </div>
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
