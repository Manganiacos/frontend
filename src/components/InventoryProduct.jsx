/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import Dots from '../assets/svg/dots';
import Trash from '../assets/svg/trash';
import Edit from '../assets/svg/edit';
import Preview from '../assets/svg/preview';

function InventoryProduct({ product }) {
  const price = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(product.price);
  return (
    <tr className="text-white/80 text-sm text-normal transition duration-300 ease-in-out hover:bg-zinc-800">
      <td className="flex flex-row gap-2 items-center  px-6 py-4 text-left">
        <img
          src={product.image}
          alt={product.name}
          className="w-8 h-8 rounded-md object-contain"
        />
        <p className="text-white/80 text-sm font-normal capitalize">
          {product.name.charAt(0).toUpperCase() +
            product.name.slice(1).toLowerCase()}{' '}
          Vol. {product.volume}
        </p>
      </td>
      <td className="text-white/80 text-sm font-normal px-6 py-4 text-left">
        {price.substring(0, price.length - 3)}
      </td>
      <td className="text-white/80 text-sm font-normal px-6 py-4 text-left">
        {product.countInStock} Unidades
      </td>
      <td className="text-xs font-bold px-6 py-4 text-left">
        {product.countInStock > 0 ? (
          <span className="text-white/80 border-[1px] border-white/50 bg-emerald-700 px-2 rounded-full">
            Disponible
          </span>
        ) : (
          <span className="text-white/80 border-[1px] border-white/50 bg-rose-600 px-2 rounded-full">
            Agotado
          </span>
        )}
      </td>
      <td className="text-white/80 text-[11px] font-normal px-6 py-4 text-left capitalize tracking-wide">
        <span className="border-[1px] border-white/50 bg-zinc-800 px-2 rounded-full">
          {product.category}
        </span>
      </td>
      <td className="text-white/80 text-[11px] font-normal px-6 py-4 text-left capitalize tracking-wide">
        <span className="border-[1px] border-white/50 bg-zinc-800 px-2 rounded-full">
          {product.editorial}
        </span>
      </td>
      <td className="text-left">
        {/*  */}
        <Popover.Root>
          <Popover.Trigger asChild>
            <button
              type="button"
              className="p-1 bg-black/50 shadow-md rounded-md cursor-pointer"
            >
              <Dots className="fill-white/80" />
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              className="border rounded-md flex flex-col border-white/20 bg-zinc-800 overflow-hidden shadow-md"
              sideOffset={5}
            >
              <div className="flex flex-col">
                <span className="flex flex-row gap-1 text-white/80 font-bold text-sm px-4 py-2 bg-[#111113]/50 hover:bg-[#111113] cursor-pointer items-center">
                  <Preview className="fill-white/80" />
                  <h1 className="ml-2">Detalles</h1>
                </span>
                <span className="flex flex-row gap-1 text-white/80 font-bold text-sm px-4 py-2 bg-[#111113]/50 hover:bg-[#111113] cursor-pointer items-center">
                  <Edit className="fill-white/80" />
                  <h1 className="ml-2">Editar</h1>
                </span>
                <span className="flex flex-row gap-1 text-red-500/80 font-bold text-sm px-4 py-2 bg-[#111113]/50 hover:bg-[#111113] cursor-pointer items-center">
                  <Trash className="fill-red-500/80" />
                  <h1 className="ml-2">Eliminar</h1>
                </span>
              </div>
              <Popover.Arrow className="fill-white/20" />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </td>
    </tr>
  );
}

export default InventoryProduct;
