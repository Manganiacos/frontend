/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function Steps({ step1, step2, step3, step4 }) {
  return (
    <section className="flex flex-row gap-6 justify-center items-center bg-black/20 p-2">
      {step1 ? (
        <div className="flex flex-row gap-1 items-center">
          <span className="h-full p-1">
            <h1
              style={{ fontSize: '10px' }}
              className="flex justify-center relative rounded-full border px-[5px] border-emerald-300 bg-emerald-700 text-white"
            >
              1
            </h1>
          </span>
          <span className="col-span-1">
            <h1 className="text-white/80 font-normal text-xs">
              Iniciar Sesión
            </h1>
          </span>
        </div>
      ) : (
        <div className="flex flex-row gap-1 items-center">
          <span className="h-full p-1">
            <h1
              style={{ fontSize: '10px' }}
              className="flex justify-center relative rounded-full border px-[5px] border-white/20 bg-zinc-800 text-white/80"
            >
              1
            </h1>
          </span>
          <span className="col-span-1">
            <h1 className="text-white/80 font-normal text-xs">
              Iniciar Sesión
            </h1>
          </span>
        </div>
      )}
      <hr className="col-span-1 border-1 border-white/50 border-dashed w-12" />
      {step2 ? (
        <div className="flex flex-row gap-1 items-center">
          <span className="h-full p-1">
            <h1
              style={{ fontSize: '10px' }}
              className="flex justify-center relative rounded-full border px-[5px] border-emerald-300 bg-emerald-700 text-white"
            >
              2
            </h1>
          </span>
          <span className="col-span-1">
            <h1 className="text-white/80 font-normal text-xs">
              Dirección de envío
            </h1>
          </span>
        </div>
      ) : (
        <div className="flex flex-row gap-1 items-center">
          <span className="h-full p-1">
            <h1
              style={{ fontSize: '10px' }}
              className="flex justify-center relative rounded-full border px-[5px] border-white/20 bg-zinc-800 text-white/80"
            >
              2
            </h1>
          </span>
          <span className="col-span-1">
            <h1 className="text-white/80 font-normal text-xs">
              Dirección de envío
            </h1>
          </span>
        </div>
      )}
      <hr className="col-span-1 border-1 border-white/50 border-dashed w-12" />
      {step3 ? (
        <div className="flex flex-row gap-1 items-center">
          <span className="h-full p-1">
            <h1
              style={{ fontSize: '10px' }}
              className="flex justify-center relative rounded-full border px-[5px] border-emerald-300 bg-emerald-700 text-white"
            >
              3
            </h1>
          </span>
          <span className="col-span-1">
            <h1 className="text-white/80 font-normal text-xs">
              Método de pago
            </h1>
          </span>
        </div>
      ) : (
        <div className="flex flex-row gap-1 items-center">
          <span className="h-full p-1">
            <h1
              style={{ fontSize: '10px' }}
              className="flex justify-center relative rounded-full border px-[5px] border-white/20 bg-zinc-800 text-white/80"
            >
              3
            </h1>
          </span>
          <span className="col-span-1">
            <h1 className="text-white/80 font-normal text-xs">
              Método de pago
            </h1>
          </span>
        </div>
      )}
      <hr className="col-span-1 border-1 border-white/50 border-dashed w-12" />
      {step4 ? (
        <div className="flex flex-row gap-1 items-center">
          <span className="h-full p-1">
            <h1
              style={{ fontSize: '10px' }}
              className="flex justify-center relative rounded-full border px-[5px] border-emerald-300 bg-emerald-700 text-white"
            >
              4
            </h1>
          </span>
          <span className="col-span-1">
            <h1 className="text-white/80 font-normal text-xs">
              Realizar pedido
            </h1>
          </span>
        </div>
      ) : (
        <div className="flex flex-row gap-1 items-center">
          <span className="h-full p-1">
            <h1
              style={{ fontSize: '10px' }}
              className="flex justify-center relative rounded-full border px-[5px] border-white/20 bg-zinc-800 text-white/80"
            >
              4
            </h1>
          </span>
          <span className="col-span-1">
            <h1 className="text-white/80 font-normal text-xs">
              Realizar pedido
            </h1>
          </span>
        </div>
      )}
    </section>
  );
}

export default Steps;
