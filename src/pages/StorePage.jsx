/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-console */
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

  const [selectedEditorial, setSelectedEditorial] = useState(null);

  const [categories, setCategories] = useState([
    { id: 1, checked: false, label: 'Josei' },
    { id: 2, checked: false, label: 'Seinen' },
    { id: 3, checked: false, label: 'Shojo' },
    { id: 4, checked: false, label: 'Shonen' },
    { id: 5, checked: false, label: 'Kodomo' }
  ]);

  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const handleSelectEditorial = (event, value) =>
    !value ? null : setSelectedEditorial(value);

  const handleChangeChecked = (id) => {
    const cusinesStateList = categories;
    const changeCheckedCategories = cusinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategories(changeCheckedCategories);
  };

  const applyFilters = () => {
    let updatedList = dataList;

    // Editorial Filter
    if (selectedEditorial) {
      updatedList = updatedList.filter(
        (item) => item.editorial === selectedEditorial
      );
    }

    // Category Filter
    const categoriesChecked = categories
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    console.log(categoriesChecked);

    if (categoriesChecked.length) {
      updatedList = updatedList.filter((item) =>
        categoriesChecked.includes(item.category)
      );
    }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.name.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    dispatch(listProducts());
    applyFilters();
  }, [dispatch, selectedEditorial, categories, searchInput]);

  return (
    <>
      <SEO title="Tienda Comics y Mangas" description="Manganiacos" />
      <section className="container mx-auto grid grid-cols-4 gap-6 pt-12 pb-56 h-screen">
        <FilterPanel
          selectedEditorial={selectedEditorial}
          selectEditorial={handleSelectEditorial}
          categories={categories}
          changeChecked={handleChangeChecked}
        />

        <section className="col-span-3 flex flex-col gap-8">
          <span className="flex w-full">
            <SearchBar
              value={searchInput}
              changeInput={(e) => setSearchInput(e.target.value)}
            />
          </span>
          <div>
            {resultsFound ? (
              // <>
              //   {loading ? (
              //     <CardLoader />
              //   ) : error ? (
              //     <Error />
              //   ) : (
              //     <ListProduct list={products} />
              //   )}
              // </>
              <ListProduct list={products} />
            ) : (
              <span className="col-span-4 flex justify-center items-center text-white font-bold text-xl h-80">
                No se encontraron resultados para tu búsqueda
              </span>
            )}
          </div>
        </section>
      </section>
    </>
  );
}

export default StorePage;
