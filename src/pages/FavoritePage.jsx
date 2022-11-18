/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import SEO from '../components/SEO';

import FavoriteProduct from '../components/FavoriteProduct';
import Mall from '../assets/svg/mall';
import Favorite from '../assets/svg/favorite';

function FavoritePage() {
  const favorite = useSelector((state) => state.favorite);
  const { loading, error, favoriteItems } = favorite;
  const [hasClicked, setHasClicked] = useState(false);

  console.log(favoriteItems);

  return (
    <>
      <SEO title="Favoritos" />
      <section className="container mx-auto mt-8">
        <div className="flex flex-col gap-6 mx-56">
          <h1 className="flex justify-between items-center">
            <span className="flex flex-col gap-1">
              <h1 className="text-2xl text-white/80 font-bold">
                Mis favoritos
              </h1>
              <h1 className="text-sm text-white/80">
                Puedes agregar productos a tu lista de favoritos
              </h1>
            </span>
            <Link
              to="/store"
              className="text-sm text-white/80 hover:text-white font-normal underline"
            >
              Volver a la tienda
            </Link>
          </h1>
          {favoriteItems.length === 0 ? (
            <div className="grid place-items-center gap-4 h-auto">
              <div className="border border-dashed rounded-full p-8 border-white/20 bg-zinc-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={24}
                  width={24}
                  className="fill-white/20"
                >
                  <path d="M12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4 2 9.3 2 8.15 2 5.8 3.575 4.225 5.15 2.65 7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55 1.175-.55 2.475-.55 2.35 0 3.925 1.575Q22 5.8 22 8.15q0 1.15-.387 2.25-.388 1.1-1.363 2.412-.975 1.313-2.625 2.963-1.65 1.65-4.175 3.925zm0-2.7q2.4-2.15 3.95-3.688 1.55-1.537 2.45-2.674.9-1.138 1.25-2.026.35-.887.35-1.762 0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662-1 .663-1.375 1.688h-1.9q-.375-1.025-1.375-1.688-1-.662-2.175-.662-1.5 0-2.5 1t-1 2.5q0 .875.35 1.762.35.888 1.25 2.026.9 1.137 2.45 2.674Q9.6 16.15 12 18.3zm0-6.825z" />
                </svg>
              </div>
              <h1 className="text-center text-sm font-normal text-white/80">
                Su Lista de favoritos está vacía
              </h1>
              <Link
                to="/store"
                className="text-sm text-white/80 hover:text-white py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
              >
                Agregar productos
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-2 bg-[#1C1C1C] rounded-md shadow-md">
              {favoriteItems.map((item) => (
                <div className="col-span-1 flex flex-col" key={item._id}>
                  <FavoriteProduct item={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default FavoritePage;
