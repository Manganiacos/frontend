/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import {
  listProductDetails,
  updateProduct
} from '../../actions/productActions';
import { PRODUCT_UPDATE_RESET } from '../../constants/productConstants';
import ImageL from '../../assets/svg/imageL';
import Minus from '../../assets/svg/minus';
import Plus from '../../assets/svg/plus';
import Left from '../../assets/svg/left';
import Save from '../../assets/svg/save';

import Loader from '../../components/loaders/Loader';

function EditProductAdmin() {
  const [formData, setFormData] = useState(false);

  const [name, setName] = useState('');
  const [price, setPrice] = useState(1);
  const [image, setImage] = useState('');
  const [volume, setVolume] = useState(1);
  const [category, setCategory] = useState('');
  const [editorial, setEditorial] = useState('');
  const [countInStock, setCountInStock] = useState(1);
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const params = useParams();

  const productDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = productDetails;

  //   console.log(product);

  const [categories, setCategories] = useState([]);
  const [editorials, setEditorials] = useState([]);

  const [maxPrice, setMaxPrice] = useState(999999);
  const [minPrice, setMinPrice] = useState(20000);

  const img =
    "'https://bioritmefestival.org/wp-content/uploads/2017/11/img-test.png'";

  const getCategories = async () => {
    const res = await axios.get('/api/categories');
    setCategories(res.data);
  };

  const getEditorials = async () => {
    const res = await axios.get('/api/editorials');
    setEditorials(res.data);
  };

  // console.log(categories);

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    // error: errorUpdate,
    // loading: loadingUpdate,
    success: successUpdate
  } = productUpdate;

  const incremenateQty = () => {
    setCountInStock(countInStock + 1);
  };
  const decrementQty = () => {
    if (countInStock > 1) {
      setCountInStock(countInStock - 1);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFormData(true);
    dispatch(
      updateProduct({
        _id: params.id,
        name,
        price,
        image,
        volume,
        category,
        editorial,
        countInStock,
        description
      })
    );
    setTimeout(() => {
      setFormData(false);
    }, 1000);
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append('image', file);
    formData.append('product_id', params.id);

    setUploading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };

      const { data } = await axios.post(
        '/api/products/upload/',
        formData,
        config
      );

      setImage(data);
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      navigate('/admin/inventory');
    } else if (!product.name || product._id !== Number(params.id)) {
      dispatch(listProductDetails(params.id));
    } else {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setVolume(product.volume);
      setCategory(product.category);
      setEditorial(product.editorial);
      setCountInStock(product.countInStock);
      setDescription(product.description);
    }
    getCategories();
    getEditorials();
  }, [dispatch, navigate, product, params, successUpdate]);
  return (
    <section className="flex flex-col gap-8">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="flex flex-row gap-1 items-center"
      >
        <Left className="fill-white/80" />
        <h1 className="text-sm text-white/80">Editar producto</h1>
      </button>
      <div className="grid grid-cols-2 gap-8 items-start">
        <span className="flex flex-col gap-1">
          <h1 className="text-2xl text-white/80">Editar producto</h1>
          <h1 className="text-sm text-white/60">
            Aquí puedes editar un producto que hayas creado
          </h1>
        </span>
      </div>
      <form onSubmit={submitHandler} className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-4">
            <span className="flex flex-col gap-2 w-full">
              <label
                className="text-white/80 text-sm font-bold ml-1"
                htmlFor={name}
              >
                Nombre del producto
              </label>
              <input
                className="outline-none bg-zinc-800/50 text-white/80 p-2 rounded-md text-sm"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre del producto"
                maxLength={80}
                minLength={5}
              />
              <small className="text-white/60 text-xs">
                Este nombre será visible para los clientes
              </small>
            </span>
            <span className="flex flex-col gap-2 w-28">
              <label
                className="text-white/80 text-sm font-bold ml-1"
                htmlFor={name}
              >
                Volumen
              </label>
              <input
                className="outline-none bg-zinc-800/50 text-white/80 p-2 rounded-md text-sm"
                type="number"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                placeholder="Volumen"
                min={1}
                max={999}
              />
            </span>
          </div>
          <span className="flex flex-col gap-2">
            <label
              className="text-white/80 text-sm font-bold ml-1"
              htmlFor={price}
            >
              Precio del producto
            </label>
            <input
              className="outline-none bg-zinc-800/50 text-white/80 p-2 rounded-md text-sm"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Precio del producto"
              max={maxPrice}
              min={minPrice}
            />
            {price < minPrice && (
              <small className="text-red-500/60 font-bold text-xs">
                Debes ingresar un precio entre $20.000 o más
              </small>
            )}
          </span>

          <span className="flex flex-col gap-2">
            <label
              className="text-white/80 text-sm font-bold ml-1"
              htmlFor={description}
            >
              Descripción
            </label>
            <textarea
              style={{
                resize: 'none'
              }}
              className="outline-none bg-zinc-800/50 text-white/80 p-2 rounded-md text-sm"
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descripción del producto"
              cols="30"
              rows="6"
            />
            <small className="text-white/60 text-xs">
              No olvides describir bien el producto para que los clientes sepan
              que están comprando
            </small>
          </span>
          <span className="flex flex-row gap-4">
            <button
              type="submit"
              className="justify-center border rounded-md border-white/20 bg-zinc-800 cursor-pointer flex flex-row gap-1"
            >
              {!formData && (
                <span className="flex flex-row gap-1 py-1 px-2">
                  <Save className="fill-white/80" />
                  <h1 className="text-sm text-white/80 ">Guardar Cambios</h1>
                </span>
              )}
              {formData && (
                <span className="flex justify-center py-1 px-2 w-36">
                  <Loader color="#eee" size={20} />
                </span>
              )}
            </button>
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="flex flex-col gap-2">
            <label
              className="text-white/80 text-sm font-bold ml-1"
              htmlFor={image}
            >
              Imagen del producto
            </label>

            <span className="flex flex-row gap-4">
              {uploading ? (
                <span className="w-44 h-44 object-contain rounded-md bg-white flex justify-center items-center">
                  <Loader color="#333" size={40} />
                </span>
              ) : (
                <>
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-44 h-44 object-contain rounded-md bg-white"
                    />
                  )}
                </>
              )}
              <div className="flex items-center justify-center border-[2px] border-dashed rounded-md w-52 h-44 border-zinc-800 bg-[#1c1c1c]">
                <span className="p-4 flex flex-col items-center">
                  <ImageL className="fill-white/80 mb-2" />
                  <p className="text-xs text-white/80 text-center">
                    Arrastra y suelta una imagen aquí, o haz click para
                    seleccionar una imagen
                  </p>
                  <label
                    className="text-xs text-[#D0F567] text-center cursor-pointer"
                    htmlFor="image"
                  >
                    Seleccionar imagen
                  </label>
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    className="sr-only"
                    onChange={uploadFileHandler}
                  />
                </span>
              </div>
            </span>
            <small className="text-white/60 text-xs">
              La imagen debe ser de 500px (Max 10Mb)
            </small>
          </span>
          <span className="flex flex-col gap-2">
            <label
              className="text-white/80 text-sm font-bold ml-1"
              htmlFor={countInStock}
            >
              Stock
            </label>
            <span className="flex flex-row">
              <button
                type="button"
                onClick={decrementQty}
                id="decrement"
                className="px-1 border fill-white border-white/20 bg-zinc-800 rounded-l-md border-r-0"
              >
                <Minus />
              </button>
              <button
                type="button"
                className="px-3 border border-white/20 bg-zinc-800 border-l-0 border-r-0"
              >
                <span className="text-white text-xs">{countInStock}</span>
              </button>
              <button
                type="button"
                onClick={incremenateQty}
                id="increment"
                className="px-1 border fill-white border-white/20 bg-zinc-800 rounded-r-md border-l-0"
              >
                <Plus />
              </button>
            </span>
            <small className="text-white/60 text-xs">
              Muestra la cantidad de productos que tienes en stock
            </small>
          </span>
          <div className="flex flex-row gap-4">
            <span className="flex flex-col gap-2">
              <label
                className="text-white/80 text-sm font-bold ml-1"
                htmlFor={category}
              >
                Categoria
              </label>
              <select
                className="outline-none bg-zinc-800/50 text-white/80 p-2 rounded-md text-sm capitalize"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" disabled>
                  Selecciona una categoria
                </option>
                {categories.map((category) => (
                  <option key={category._id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </span>
            <span className="flex flex-col gap-2">
              <label
                className="text-white/80 text-sm font-bold ml-1"
                htmlFor={editorial}
              >
                Editorial
              </label>
              <select
                className="outline-none bg-zinc-800/50 text-white/80 p-2 rounded-md text-sm capitalize"
                value={editorial}
                onChange={(e) => setEditorial(e.target.value)}
              >
                <option value="" disabled>
                  Selecciona una editorial
                </option>
                {editorials.map((editorial) => (
                  <option key={editorial._id} value={editorial.name}>
                    {editorial.name}
                  </option>
                ))}
              </select>
            </span>
          </div>
        </div>
      </form>
    </section>
  );
}

export default EditProductAdmin;
