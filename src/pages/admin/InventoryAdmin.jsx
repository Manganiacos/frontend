/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useNavigate, useLocation } from 'react-router-dom';

import ReactTooltip from 'react-tooltip';
import InventoryProduct from '../../components/InventoryProduct';
import {
  listProducts,
  deleteProduct,
  createProduct
} from '../../actions/productActions';

import { PRODUCT_CREATE_RESET } from '../../constants/productConstants';

import Left from '../../assets/svg/left';
import Shelves from '../../assets/svg/shelves';
import SearchIcon from '../../assets/svg/search';

function Inventory() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  const keyword = location.search;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct
  } = productCreate;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    // if (!userInfo.isAdmin) {
    //     navigate("/login");
    // }

    if (successCreate) {
      navigate(`admin/inventory/product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProducts(keyword));
    }
  }, [
    dispatch,
    keyword,
    navigate,
    location,
    successDelete,
    successCreate,
    createdProduct
  ]);

  const createProductHandler = () => {
    dispatch(createProduct());
    // console.log("createProductHandler");
  };

  const deleteHandler = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <section>
      <span className="flex flex-row gap-1 items-center">
        <Left className="fill-white/80" />
        <h1 className="text-sm text-white/80">Inventario</h1>
      </span>
      <div className="grid grid-cols-1 mt-8 gap-4">
        <div className="flex flex-row gap-8 items-center">
          <h1 className="text-[#D0F567] text-sm">
            {' '}
            {products.length} productos en total
          </h1>
          <h1 className="text-white/80 text-sm">|</h1>
          <button type="button" data-tip data-for="new">
            <Shelves className="fill-white/50 hover:fill-white/80" />
          </button>
          <ReactTooltip id="new" place="right" effect="solid">
            <span className="text-xs text-white/80">
              Agregar nuevo producto al inventario
            </span>
          </ReactTooltip>
          <span className="flex flex-row gap-2 relative">
            <input
              type="text"
              placeholder="Buscar"
              className="relative pl-11 w-full bg-zinc-800/80 placeholder:text-white/80 text-white rounded-md px-4 py-2 text-sm font-normal outline-none"
            />
            <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 fill-white/80" />
          </span>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full bg-[#1c1c1c] rounded-md shadow-sm overflow-hidden">
                  <thead className="border-b border-zinc-800">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white/80 px-6 py-4 text-left"
                      >
                        Nombre
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white/80 px-6 py-4 text-left"
                      >
                        Precio
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white/80 px-6 py-4 text-left"
                      >
                        Existencia
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white/80 px-6 py-4 text-left"
                      >
                        Estado
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white/80 px-6 py-4 text-left"
                      >
                        Categoría
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white/80 px-6 py-4 text-left"
                      >
                        Editorial
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white/80 px-6 py-4 text-left"
                      />
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <InventoryProduct
                        key={product._id}
                        product={product}
                        deleteHandler={deleteHandler}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-[#1c1c1c] py-3 rounded-md shadow-sm">
          <table className="w-full">
            <thead className="border">
              <tr className="border">
                <th className="text-white/80 text-sm text-normal">Nombre</th>
                <th className="text-white/80 text-sm text-normal">Precio</th>
                <th className="text-white/80 text-sm text-normal">
                  Existencias
                </th>
                <th className="text-white/80 text-sm text-normal">Categoría</th>
                <th className="text-white/80 text-sm text-normal">Editorial</th>
                <th className="text-white/80 text-sm text-normal">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <InventoryProduct
                  key={product._id}
                  product={product}
                  deleteHandler={deleteHandler}
                />
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
    </section>
  );
}

export default Inventory;
