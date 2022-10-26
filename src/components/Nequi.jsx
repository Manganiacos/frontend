/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import File from '../assets/svg/file';
import Close from '../assets/svg/close';

function Nequi() {
  const [image, setImage] = useState(null);
  const clearImage = () => {
    setImage(null);
  };
  //   const [status, setStatus] = useState(true);
  return (
    <div className="flex flex-col gap-2 items-center">
      <span className="rounded-md bg-zinc-700/10 w-40 h-40 border-2 border-zinc-700 border-dashed flex items-center justify-center">
        {!image ? (
          <File className="fill-white/50 " />
        ) : (
          <span className="relative">
            <button
              type="button"
              onClick={clearImage}
              className="absolute top-0 right-0"
            >
              <Close className="fill-black/80 hover:fill-red-500/80" />
            </button>
            <img src={image} alt="file" className="w-36 h-36 object-cover" />
          </span>
        )}
      </span>
      {!image ? (
        <span>
          <input
            type="file"
            name="file"
            id="file"
            className="hidden sr-only"
            onChange={(e) => {
              setImage(URL.createObjectURL(e.target.files[0]));
            }}
          />
          <label
            htmlFor="file"
            className="text-white/50 hover:text-white/80 underline text-xs font-medium cursor-pointer"
          >
            Subir Comprobante
          </label>
        </span>
      ) : (
        <button
          type="button"
          className="text-xs text-white/80 hover:text-white py-1 w-[150px] bg-zinc-900 border rounded-md border-white/20"
        >
          Enviar
        </button>
      )}
    </div>
  );
}

export default Nequi;
