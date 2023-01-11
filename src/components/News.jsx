/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { listProductsNew } from '../actions/productActions';

import Loader from './loaders/Loader';
// import Arrow from '../assets/svg/arrow';
import Left from '../assets/svg/left';
import RightA from '../assets/svg/rightA';
import Product from './Product';
import ProductNew from './ProductNew';

function News() {
  const dispatch = useDispatch();
  const location = useLocation();

  const [productArray, setProductArray] = useState([]);
  const [productFilter, setProductFilter] = useState([]);
  const [openProduct, cycleOpenProduct] = useCycle(false, true);

  const handleProduct = (product) => {
    setProductArray(product);
    cycleOpenProduct();
  };

  if (openProduct) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  const keyword = location.search;

  const productNew = useSelector((state) => state.productNew);
  const { error, loading, products } = productNew;

  // console.log('products:', products);

  const productsWithDate = products
    .map((product) => {
      const date = new Date(product.createdAt);
      const dateString = date.toLocaleDateString();
      return { ...product, createdAt: dateString };
    })
    .reverse();

  // console.log(productsWithDate);

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
      localized.day + 1,
      0,
      0 - OFFSET_TO_UTC,
      0
    );

  const parseDate = (pattern, sep, dateString) =>
    toDate(localizeDate(pattern, parseDateString(dateString, sep)));

  // console.log('HOY:', parseDate(['m', 'd', 'y'], '/', today));

  const filterByDatePattern = (pattern, sep) =>
    function (createdAt, list) {
      return list.filter((item) => {
        // console.log('Creacion:', createdAt);
        const itemDate = parseDate(pattern, sep, item.createdAt);
        // console.log('Item:', itemDate);
        return itemDate >= createdAt;
      });
    };

  const dateNow = parseDate(['m', 'd', 'y'], '/', `${today}`);
  // console.log('HOY:', dateNow);

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
  // console.log('numeroDia:', numeroDia);

  const nombreDia = dias[numeroDia];
  // console.log('nombreDia:', nombreDia);

  const dates = parseDate(['d', 'm', 'y'], '/', '27/08/2022');
  // console.log('dates:', dates);

  const [available, setAvailable] = useState(dates);
  // console.log('available:', available);

  // console.log('date:', available);
  // console.log('products:', productsWithDate);

  const onlyUSUntil = filterByDatePattern(['d', 'm', 'y'], '/');
  const filter = onlyUSUntil(available, productsWithDate);
  // console.log('filter:', filter);

  const setDate = () => {
    if (nombreDia === 'martes') {
      setAvailable(dateNow);
      // console.log('Hoy es martes');
    }
  };

  useEffect(() => {
    dispatch(listProductsNew());
    setDate();
  }, [dispatch, keyword]);

  return (
    <>
      {loading ? (
        <span className="flex justify-center items-center w-full h-[200px]">
          <Loader color="#eee" size={80} />
        </span>
      ) : error ? (
        <div className="grid place-items-center h-auto my-8 lg:my-44">
          <h1>Error</h1>
        </div>
      ) : (
        <>
          {filter.length > 0 ? (
            <section className="pt-8 xl:pt-28 lg:px-0 px-6">
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
                  <h1 className="flex justify-start text-white/80 font-bold text-lg xl:text-xl capitalize">
                    Novedades de la semana
                  </h1>
                </span>
                <hr className="border-zinc-800 w-full mt-2 col-span-3 mb-8" />
              </div>
              <div className="xl:hidden block relative cursor-move">
                <Splide
                  hasTrack={false}
                  options={{
                    type: 'loop',
                    pagination: false,
                    perPage: 1,
                    perMove: 1,
                    rewindByDrag: false,
                    speed: 1000,
                    autoplay: true,
                    gap: '1em',
                    arrows: true,
                    fade: true
                  }}
                >
                  <SplideTrack>
                    {filter.map((product) => (
                      <SplideSlide key={product._id}>
                        <ProductNew
                          product={product}
                          handleProduct={handleProduct}
                        />
                      </SplideSlide>
                    ))}
                  </SplideTrack>

                  <div className="splide__arrows flex flex-row gap-2 justify-center">
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
              <div className="hidden xl:block relative cursor-move">
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
                        <ProductNew
                          product={product}
                          handleProduct={handleProduct}
                        />
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
          <AnimatePresence exitBeforeEnter>
            {openProduct && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-black/50 fixed top-0 left-0 w-screen h-screen z-[70]"
              >
                <motion.span
                  initial={{
                    x: '100vh',
                    opacity: 0
                  }}
                  animate={{
                    x: '0vh',
                    opacity: 1
                  }}
                  transition={{ duration: 0.5 }}
                  exit={{
                    x: '100vh',
                    opacity: 0,
                    backgroundColor: 'transparent'
                  }}
                  className="fixed top-0 left-0 w-screen h-screen z-[70]"
                >
                  <>
                    <Product
                      onClick={cycleOpenProduct}
                      product={productArray}
                      key={productArray}
                    />
                  </>
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default News;
