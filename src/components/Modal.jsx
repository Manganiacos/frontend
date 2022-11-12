/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Close from '../assets/svg/close';
import Trash from '../assets/svg/trash';

function Modal({ product, cycleDeleteProduct, deleteHandler }) {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] bg-zinc-900 rounded-md py-4 px-8">
      <div className="flex justify-between items-start">
        <span className="flex flex-col gap-1">
          <h1 className="text-red-500/80 text-lg font-normal">
            Seguro que quieres eliminar este producto?
          </h1>
          <h1 className="text-white text-xs font-normal">
            Esta acción no se puede deshacer
          </h1>
        </span>
        <button type="button" onClick={cycleDeleteProduct}>
          <Close className="fill-white/50 hover:fill-white" />
        </button>
      </div>
      <div className="flex flex-col gap-2 my-4">
        <div className="flex flex-row gap-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-20 object-contain rounded-md"
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-white/80 text-sm font-bold capitalize">
              {product.name.charAt(0).toUpperCase() +
                product.name.slice(1).toLowerCase()}{' '}
              Vol. {product.volume}
            </h1>
            <h1 className="text-white/80 text-xs font-normal">
              {product.description}
            </h1>
          </div>
        </div>
        <span className="flex justify-end">
          <button
            type="button"
            onClick={() => {
              deleteHandler(product._id);
              cycleDeleteProduct();
            }}
            className="py-1 px-2 border rounded-md border-white/20 bg-zinc-800 cursor-pointer flex flex-row gap-1 "
          >
            <Trash className="fill-red-500/80" />
            <h1 className="text-red-500/80 text-sm">Eliminar</h1>
          </button>
        </span>
      </div>
    </div>
  );
}

export default Modal;
