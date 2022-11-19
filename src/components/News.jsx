/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { listProducts } from '../actions/productActions';

import Arrow from '../assets/svg/arrow';
import Left from '../assets/svg/left';
import RightA from '../assets/svg/rightA';

import ProductNew from './ProductNew';

function News() {
  const dispatch = useDispatch();
  const location = useLocation();

  const keyword = location.search;

  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  const productsWithDate = products
    .map((product) => {
      const date = new Date(product.createdAt);
      const dateString = date.toLocaleDateString();
      return { ...product, createdAt: dateString };
    })
    .reverse();

  const time = new Date();
  const day = time.getDate();
  const month = time.getMonth() + 1;
  const year = time.getFullYear();
  const today = `0${month}/${day}/${year}`;

  const OFFSET_TO_UTC = new Date().getTimezoneOffset();

  const parseDateString = (dateString, sep) => {
    const parts = dateString.split(sep);
    return parts.map((n) => Number(n));
  };

  const localizeDate = (pattern, parts) =>
    pattern.reduce((acc, pat, i) => {
      switch (pat) {
        case 'm':
          return Object.assign(acc, { month: parts[i] });
        case 'd':
          return Object.assign(acc, { day: parts[i] });
        case 'y':
          return Object.assign(acc, { year: parts[i] });
        default:
          return acc;
      }
    }, {});

  const toDate = (localized) =>
    new Date(
      localized.year,
      localized.month - 1,
      localized.day,
      0,
      0 - OFFSET_TO_UTC,
      0
    );

  const parseDate = (pattern, sep, dateString) =>
    toDate(localizeDate(pattern, parseDateString(dateString, sep)));

  const filterByDatePattern = (pattern, sep) =>
    function (createdAt, list) {
      return list.filter((item) => {
        const itemDate = parseDate(pattern, sep, item.createdAt);
        return itemDate >= createdAt;
      });
    };
  const dateNow = parseDate(['m', 'd', 'y'], '/', `${today}`);

  const dias = [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado'
  ];

  const numeroDia = new Date(today).getDay();

  const nombreDia = dias[numeroDia];

  const dates = parseDate(['m', 'd', 'y'], '/', '08/27/2022');

  const [available, setAvailable] = useState(dates);

  const onlyUSUntil = filterByDatePattern(['m', 'd', 'y'], '/');
  const filter = onlyUSUntil(available, productsWithDate);

  const setDate = () => {
    if (nombreDia === 'martes') {
      setAvailable(dateNow);
    }
  };

  useEffect(() => {
    dispatch(listProducts(keyword));
    setDate();
  }, [dispatch, keyword]);

  return (
    <>
      {loading ? (
        <div className="grid place-items-center h-96">
          <h1>load</h1>
        </div>
      ) : error ? (
        <div className="grid place-items-center h-auto my-8 lg:my-44">
          <h1>Error</h1>
        </div>
      ) : (
        <>
          {filter.length > 0 ? (
            <section className="pt-28 lg:px-0 px-6">
              <div className="grid grid-cols-3 items-center">
                <span className="col-span-3 flex flex-row gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={20}
                    width={20}
                    className="fill-red-500/80"
                  >
                    <path d="M10 15q-2.083 0-3.542-1.458Q5 12.083 5 10q0-2.083 1.458-3.542Q7.917 5 10 5q2.083 0 3.542 1.458Q15 7.917 15 10q0 2.083-1.458 3.542Q12.083 15 10 15z" />
                  </svg>
                  <h1 className="flex justify-start text-white/80 font-bold text-xl capitalize">
                    Novedades de la semana
                  </h1>
                </span>
                <hr className="border-zinc-800 w-full mt-2 col-span-3 mb-8" />
              </div>
              <div className="relative cursor-move">
                <Splide
                  hasTrack={false}
                  options={{
                    type: 'loop',
                    pagination: false,
                    perPage: 5,
                    perMove: 1,
                    rewindByDrag: false,
                    speed: 1000,
                    autoplay: true,
                    gap: '2em',
                    arrows: true,
                    fade: true
                  }}
                >
                  <SplideTrack>
                    {filter.map((product) => (
                      <SplideSlide key={product._id}>
                        <ProductNew product={product} />
                      </SplideSlide>
                    ))}
                  </SplideTrack>

                  <div className="splide__arrows flex flex-row gap-2 justify-end">
                    <button className="pt-8 col-span-1 flex justify-start splide__arrow--prev">
                      <span className="py-1 px-2 border rounded-md border-white/20 bg-zinc-800">
                        <Left
                          className="fill-white/50 hover:fill-white/80"
                          style={{
                            transform: 'rotate(360deg)'
                          }}
                        />
                      </span>
                    </button>
                    <button className="pt-8 col-span-1 flex justify-end splide__arrow--next">
                      <span className="py-1 px-2 border rounded-md border-white/20 bg-zinc-800">
                        <RightA className="fill-white/50 hover:fill-white/80" />
                      </span>
                    </button>
                  </div>
                </Splide>
              </div>
            </section>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
}

export default News;
