import React from 'react';
import BagMall from '../../assets/svg/bagMall';

function Dashboard() {
  return (
    <section className="flex flex-col gap-8">
      <span className="flex flex-col gap-1">
        <h1 className="text-2xl text-white/80">
          Bienvenido de nuevo, <span className="font-bold">Manuel</span>
        </h1>
        <h1 className="text-sm text-white/60">
          Aquí puedes ver un resumen de tu negocio
        </h1>
      </span>
      <div className="flex flex-row">
        <div className="flex flex-col gap-4 bg-[#D0F567] rounded-l-md p-4 shadow-sm border border-dotted border-t-0 border-b-0 border-l-0 border-zinc-800">
          <div className="flex flex-row gap-4 items-start">
            <span className="bg-black/80 p-1 rounded-full">
              <BagMall className="fill-white/80" />
            </span>
            <div className="flex flex-col">
              <h1 className="text-black text-md font-bold">Ventas del día</h1>
              <h1 className="text-black text-md">
                $<span className="font-bold ">200.000</span>
              </h1>
            </div>
          </div>
        </div>
        {/* <span className=" flex flex-col bg-zinc-800/50 p-8 shadow-sm border border-dotted border-t-0 border-b-0 border-l-0 border-zinc-600">
          <h1 className="text-white/80">Hola</h1>
        </span>
        <span className=" flex flex-col bg-zinc-800/50 p-8 shadow-sm border border-dotted border-t-0 border-b-0 border-l-0 border-zinc-600">
          <h1 className="text-white/80">Hola</h1>
        </span>
        <span className=" flex flex-col bg-zinc-800/50 rounded-r-md p-8 shadow-sm ">
          <h1 className="text-white/80">Hola</h1>
        </span> */}
      </div>
    </section>
  );
}

export default Dashboard;
