/* eslint-disable prefer-const */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo } from 'react';

import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { listProducts, listProductsAll } from '../actions/productActions';
import Pagination from '../components/Pagination';

import Card from '../components/Card';
import FilterPanel from '../components/FilterPanel';
import SearchBar from '../components/filters/SearchBar';
// import { dataList } from '../constants/constant';

// import Clean from '../assets/svg/clean';
// import Settings from '../assets/svg/settings';
import SEO from '../components/SEO';

// import Error from '../components/Error';
import Paginate from '../components/filters/Paginate';

import CardLoader from '../components/loaders/CardLoader';
import ListProduct from '../components/list/ListProduct';
import Filter from '../assets/svg/filter';

function StorePage() {
  // constants
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { error, loading, products, page, pages } = productList;

  const [list, setList] = useState([]);

  const [pageCount, setPageCount] = useState(1);

  const location = useLocation();
  const keyword = location.search;

  const PageSize = 12;

  const [currentPage, setCurrentPage] = useState(1);

  // const [currentData, setCurrentData] = useState([]);

  const [selectedEditorial, setSelectedEditorial] = useState(null);

  const handleValue = (e) => {
    e.preventDefault();
    setSelectedEditorial(e.target.value);
  };

  const [categories, setCategories] = useState([
    { id: 1, checked: false, label: 'josei' },
    { id: 2, checked: false, label: 'seinen' },
    { id: 3, checked: false, label: 'shojo' },
    { id: 4, checked: false, label: 'shonen' },
    { id: 5, checked: false, label: 'kodomo' }
  ]);

  const [resultsFound, setResultsFound] = useState(true);

  const [searchInput, setSearchInput] = useState('');

  // const handleSearch = async (e) => {
  //   e.preventDefault();
  //   await dispatch(listProducts(`?keyword=${searchInput}`));
  //   currentPage === 1 ? setCurrentPage(1) : setCurrentPage(1);
  //   setList(products);
  // };

  const handleSelectEditorial = (event, value) =>
    !value ? null : setSelectedEditorial(value);

  const handleChangeChecked = (id) => {
    const categoriesStateList = categories;
    const changeCheckedCategories = categoriesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategories(changeCheckedCategories);
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    // return products.slice(firstPageIndex, lastPageIndex);
    return list.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, products, list]);

  const handleClearFilters = () => {
    setList(products);
    setCategories([
      { id: 1, checked: false, label: 'josei' },
      { id: 2, checked: false, label: 'seinen' },
      { id: 3, checked: false, label: 'shojo' },
      { id: 4, checked: false, label: 'shonen' },
      { id: 5, checked: false, label: 'kodomo' }
    ]);
    setSelectedEditorial(null);
  };

  const applyFilters = () => {
    let updatedList = [...products];

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

    if (categoriesChecked.length) {
      updatedList = updatedList.filter((item) =>
        categoriesChecked.includes(item.category)
      );
    }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    setList(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };
  // console.log('products:', list);

  useEffect(() => {
    if (searchInput === '') {
      dispatch(listProducts(keyword));
      // setList(products);
    }
    // dispatch(listProducts(keyword));

    applyFilters();
  }, [dispatch, selectedEditorial, categories, searchInput, keyword]);

  return (
    <>
      <SEO title="Tienda Comics y Mangas" description="Manganiacos" />
      <section className="container mx-auto grid grid-cols-4 gap-6 pt-12 pb-96 h-full xl:px-0 px-8">
        <span className="hidden xl:block">
          <FilterPanel
            clearFilters={handleClearFilters}
            selectedEditorial={selectedEditorial}
            selectEditorial={handleSelectEditorial}
            categories={categories}
            changeChecked={handleChangeChecked}
            handleValue={handleValue}
          />
        </span>
        <section className="xl:col-span-3 col-span-4 flex flex-col gap-8">
          <span className="flex gap-4 w-full items-center">
            <SearchBar
              value={searchInput}
              changeInput={(e) => setSearchInput(e.target.value)}
              resetInput={(e) => {
                setSearchInput('');
              }}
            />
            <div className="relative">
              <button
                type="button"
                className="py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
              >
                <Filter className="fill-white/80" />
              </button>
            </div>
          </span>
          <div>
            {resultsFound ? (
              <>
                {loading ? (
                  <CardLoader />
                ) : (
                  <>
                    {list.length > 0 ? (
                      <div className="flex flex-col gap-8 items-center">
                        <ListProduct products={currentTableData} />
                        <Pagination
                          currentPage={currentPage}
                          totalCount={list.length}
                          pageSize={PageSize}
                          onPageChange={(page) => setCurrentPage(page)}
                        />
                      </div>
                    ) : (
                      <span className="col-span-4 flex justify-center items-center text-white font-bold text-xl xl:h-80 h-56 text-center">
                        No se encontraron resultados para tu búsqueda
                      </span>
                    )}
                  </>
                )}
              </>
            ) : (
              <span className="col-span-4 flex justify-center items-center text-white font-bold text-xl xl:h-80 h-56 text-center">
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
