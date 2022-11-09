/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable radix */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Card from '../components/Card';
import FilterPanel from '../components/FilterPanel';
import SearchBar from '../components/filters/SearchBar';
import { dataList } from '../constants/testConstant';

import Clean from '../assets/svg/clean';
import Settings from '../assets/svg/settings';
import SEO from '../components/SEO';

import Error from '../components/Error';

import CardLoader from '../components/loaders/CardLoader';
import ListProduct from '../components/list/ListProduct';

function StorePage() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);

  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: 'American' },
    { id: 2, checked: false, label: 'Chinese' },
    { id: 3, checked: false, label: 'Italian' }
  ]);

  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleChangeChecked = (id) => {
    const cusinesStateList = cuisines;
    const changeCheckedCuisines = cusinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const applyFilters = () => {
    let updatedList = dataList;

    // Category Filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

    // Cuisine Filter
    const cuisinesChecked = cuisines
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (cuisinesChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisinesChecked.includes(item.cuisine)
      );
    }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    dispatch(listProducts());
    applyFilters();
  }, [dispatch, selectedCategory, cuisines, searchInput, selectedPrice]);

  return (
    <>
      <SEO title="Tienda Comics y Mangas" description="Manganiacos" />
      <section>
        <SearchBar
          value={searchInput}
          changeInput={(e) => setSearchInput(e.target.value)}
        />
        <FilterPanel
          selectedCategory={selectedCategory}
          selectCategory={handleSelectCategory}
          selectedPrice={selectedPrice}
          cuisines={cuisines}
          changeChecked={handleChangeChecked}
          changePrice={handleChangePrice}
        />
        {resultsFound ? <ListProduct list={list} /> : 'vacio'}
      </section>
      {/* {loading ? (
        <CardLoader />
      ) : error ? (
        <Error />
      ) : (
        <section className="container mx-auto grid grid-cols-4 gap-6 pt-12 pb-56">
          <div className="col-span-1 bg-black/30 rounded-md flex flex-col h-[320px]">
            <span className="flex justify-between p-4 items-center">
              <span className="flex flex-row gap-2 items-center">
                <Settings className="fill-white/80" />
                <h1 className="text-white/80 font-normal text-sm">Filtros</h1>
              </span>
              <button
                type="button"
                className="py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
              >
                <Clean className="fill-white/80" />
              </button>
            </span>
            <hr className="border-zinc-800" />
            <span className="flex flex-col gap-4 p-4">
              <h1 className="text-sm font-normal tracking-wide text-white/80">
                Categorias
              </h1>
              <span className="flex flex-row gap-2">
                <button
                  type="button"
                  className="text-xs text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800"
                >
                  Shonen
                </button>
                <button
                  type="button"
                  className="text-xs text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800"
                >
                  Shojo
                </button>
                <button
                  type="button"
                  className="text-xs text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800"
                >
                  Seinen
                </button>

                <button
                  type="button"
                  className="text-xs text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800"
                >
                  Josei
                </button>
                <button
                  type="button"
                  className="text-xs text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800"
                >
                  Kodomo
                </button>
              </span>
            </span>
            <hr className="border-zinc-800" />
            <span className="flex flex-col gap-4 p-4">
              <h1 className="text-sm font-normal tracking-wide text-white/80">
                Editoriales
              </h1>
              <span className="flex flex-row gap-2">
                <button
                  type="button"
                  className="text-xs text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800"
                >
                  Panini
                </button>
                <button
                  type="button"
                  className="text-xs text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800"
                >
                  Ivrea
                </button>
                <button
                  type="button"
                  className="text-xs text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800"
                >
                  Kamite
                </button>

                <button
                  type="button"
                  className="text-xs text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800"
                >
                  Norma
                </button>
                <button
                  type="button"
                  className="text-xs text-white/80 py-1 px-1 border rounded-md border-white/20 bg-zinc-800"
                >
                  ECC
                </button>
              </span>
            </span>
            <hr className="border-zinc-800" />
            <span className="flex justify-center p-4 items-center">
              <button
                type="button"
                className="text-sm text-white/80 py-1 px-8 border rounded-md border-white/20 bg-zinc-800"
              >
                Aplicar Filtros
              </button>
            </span>
          </div>
          <div className="col-span-3 grid grid-cols-4 justify-center gap-4">
            {products.map((product) => (
              <div key={product._id} className="col-span-1">
                <Card product={product} />
              </div>
            ))}
          </div>
        </section>
      )} */}
    </>
  );
}

export default StorePage;
