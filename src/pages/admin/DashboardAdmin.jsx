import React from 'react';
import BagMall from '../../assets/svg/bagMall';
import Coin from '../../assets/svg/coin';
import Belt from '../../assets/svg/belt';
import Star from '../../assets/svg/star';
import ArrowSold from '../../assets/svg/arrowSold';
import StickArrow from '../../assets/svg/StickArrow';

import Donut from '../../components/charts/Donut';
import Area from '../../components/charts/Area';
import Bar from '../../components/charts/Bar';

function Dashboard() {
  const data = [
    {
      name: 'Belt',
      value: 10
    },
    {
      name: 'Bag',
      value: 20
    },
    {
      name: 'Coin',
      value: 30
    },
    {
      name: 'Star',
      value: 40
    }
  ];

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
        <div className="overflow-clip relative flex flex-col w-56 gap-4 bg-gradient-to-b from-[#83964f] to-[#D0F567] rounded-l-md p-4 shadow-sm border border-dotted border-t-0 border-b-0 border-l-0 border-zinc-800">
          <div className="flex flex-row gap-3 items-center">
            <span className="bg-black/80 p-1 rounded-full">
              <Coin className="fill-white/80" />
            </span>
            <div className="flex flex-col">
              <h1 className="text-black text-sm font-bold">Ventas</h1>
            </div>
          </div>
          <span className="absolute -right-6 -bottom-2">
            <ArrowSold className="w-32 fill-white/30 " />
          </span>
          <span>
            <h1 className="text-black text-lg">
              <span className="font-bold ">$ 200.000</span>
            </h1>
            <span className="flex flex-row gap-1">
              <StickArrow className="w-4 fill-black/60" />
              <h1 className="text-black text-xs">+ 10% esta semana</h1>
            </span>
          </span>
        </div>
        {/* <div className="overflow-clip relative flex flex-col w-56 gap-4 bg-gradient-to-b from-[#EA512E] to-[#f56e4f]  rounded-l-md p-4 shadow-sm border border-dotted border-t-0 border-b-0 border-l-0 border-zinc-800">
          <div className="flex flex-row gap-3 items-center">
            <span className="bg-black/80 p-1 rounded-full">
              <Coin className="fill-white/80" />
            </span>
            <div className="flex flex-col">
              <h1 className="text-black text-sm font-bold">Ventas</h1>
            </div>
          </div>
          <span className="absolute -right-6 bottom-2">
            <ArrowSold className="w-32 fill-white/10 rotate-180" />
          </span>
          <span>
            <h1 className="text-black text-lg">
              <span className="font-bold ">$ 200.000</span>
            </h1>
            <span className="flex flex-row gap-1">
              <StickArrow className="w-4 fill-black/60 rotate-90" />
              <h1 className="text-black text-xs">- 5% esta semana</h1>
            </span>
          </span>
        </div> */}
        <div className="flex flex-col w-56 gap-4 bg-[#1C1C1C] p-4 shadow-sm border border-dotted border-t-0 border-b-0 border-l-0 border-zinc-800">
          <div className="flex flex-row gap-3 items-center">
            <span className="bg-black/80 p-1 rounded-full">
              <Star className="fill-white/80" />
            </span>
            <div className="flex flex-col">
              <h1 className="text-white/80 text-sm font-bold">Ordenes</h1>
            </div>
          </div>
          <span>
            <h1 className="text-white/80 text-lg">
              <span className="font-bold ">10</span>
            </h1>
            <span className="flex flex-row gap-1">
              <StickArrow className="w-4 fill-[#EA512E] rotate-90" />
              <h1 className="text-white/80 text-xs">
                <span className="text-[#EA512E] text-xs">- 12%</span> esta
                semana
              </h1>
            </span>
          </span>
        </div>
        <div className="flex flex-col w-56 gap-4 bg-[#1C1C1C] p-4 shadow-sm border border-dotted border-t-0 border-b-0 border-l-0 border-zinc-800">
          <div className="flex flex-row gap-3 items-center">
            <span className="bg-black/80 p-1 rounded-full">
              <Belt className="fill-white/80" />
            </span>
            <div className="flex flex-col">
              <h1 className="text-white/80 text-sm font-bold">Envios</h1>
            </div>
          </div>
          <span>
            <h1 className="text-white/80 text-lg">
              <span className="font-bold ">20</span>
            </h1>
            <span className="flex flex-row gap-1">
              <StickArrow className="w-4 fill-[#D0F567]" />
              <h1 className="text-white/80 text-xs">
                <span className="text-[#D0F567] text-xs">+ 17%</span> esta
                semana
              </h1>
            </span>
          </span>
        </div>
        <div className="flex flex-col w-56 gap-4 bg-[#1C1C1C] rounded-r-md p-4 shadow-sm">
          <div className="flex flex-row gap-3 items-center">
            <span className="bg-black/80 p-1 rounded-full">
              <BagMall className="fill-white/80" />
            </span>
            <div className="flex flex-col">
              <h1 className="text-white/80 text-sm font-bold">Devoluciones</h1>
            </div>
          </div>
          <span>
            <h1 className="text-white/80 text-lg">
              <span className="font-bold ">8</span>
            </h1>
            <span className="flex flex-row gap-1">
              <StickArrow className="w-4 fill-[#D0F567]" />
              <h1 className="text-white/80 text-xs">
                <span className="text-[#D0F567] text-xs">+ 1%</span> esta semana
              </h1>
            </span>
          </span>
        </div>
      </div>
      <div className="grid overflow-hidden grid-cols-4 grid-rows-4 gap-4 items-start">
        <div className="bg-[#1C1C1C] rounded-md col-span-3 p-4">
          <h1 className="text-white/80 text-md font-bold">
            Ingresos de este mes
          </h1>
          <div>
            <Area data={data} />
          </div>
        </div>
        <div className="bg-[#1C1C1C] rounded-md row-span-1 p-4">
          <h1 className="text-white/80 text-md font-bold">
            Ventas por categoría
          </h1>
          {/* chart */}
          <Donut data={data} />
        </div>
        <div className="bg-[#1C1C1C] rounded-md col-span-3 p-4">
          <h1 className="text-white/80 text-md font-bold">
            Top 5 productos más vendidos
          </h1>
          <Bar data={data} />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
