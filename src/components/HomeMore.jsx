import React from 'react';
import CartRepo from '../assets/svg/svgRepos/cartRepo';
import PayRepo from '../assets/svg/svgRepos/payRepo';
import ShopRepo from '../assets/svg/svgRepos/shopRepo';
import DeliveryRepo from '../assets/svg/svgRepos/deliveryRepo';

function HomeMore() {
  return (
    <section className="flex flex-col pt-20 px-8 xl:px-40 pb-[500px]">
      <span className="flex flex-row gap-1 items-center justify-center">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          height={20}
          width={20}
          className="fill-red-500/80"
        >
          <path d="M10 15q-2.083 0-3.542-1.458Q5 12.083 5 10q0-2.083 1.458-3.542Q7.917 5 10 5q2.083 0 3.542 1.458Q15 7.917 15 10q0 2.083-1.458 3.542Q12.083 15 10 15z" />
        </svg> */}
        <h1 className="flex text-white/80 text-xl capitalize font-bold">
          ¿Cómo Comprar?
        </h1>
      </span>
      {/* <hr className="border-zinc-800 w-full mt-2" /> */}

      <div className="grid grid-cols-4 xl:gap-0 gap-14 px-0 mt-12 items-start justify-start">
        <div className="col-span-4 xl:col-span-1 flex flex-col gap-4 justify-center items-center">
          <div className="flex justify-center text-center">
            <span className="bg-black/30 border border-zinc-800 p-6 rounded-full transform transition duration-500 hover:scale-[1.1] hover:shadow-lg">
              <CartRepo className="fill-white/80 h-14 w-14" />
            </span>
          </div>
          <span className="flex flex-col gap-6 text-center">
            <h1 className="tracking-wider text-xl text-white">Haz tu pedido</h1>
            <h1 className="text-white text-sm w-48">
              Añade tus productos favoritos a tu carrito de compras
            </h1>
          </span>
        </div>
        <div className="col-span-4 xl:col-span-1 flex flex-col gap-4 justify-center items-center">
          <div className="flex justify-center text-center">
            <span className="bg-black/30 border border-zinc-800 p-6 rounded-full transform transition duration-500 hover:scale-[1.1] hover:shadow-lg">
              <PayRepo className="fill-white/80 h-14 w-14" />
            </span>
          </div>
          <span className="flex flex-col gap-6 text-center">
            <h1 className="tracking-wider text-xl text-white">
              Realiza el pago
            </h1>
            <h1 className="text-white text-sm w-48">
              Haz el pago mediante transferencia bancaria o PayPal
            </h1>
          </span>
        </div>
        <div className="col-span-4 xl:col-span-1 flex flex-col gap-4 justify-center items-center">
          <div className="flex justify-center text-center">
            <span className="bg-black/30 border border-zinc-800 p-6 rounded-full transform transition duration-500 hover:scale-[1.1] hover:shadow-lg">
              <DeliveryRepo className="fill-white/80 h-14 w-14" />
            </span>
          </div>
          <span className="flex flex-col gap-6 text-center">
            <h1 className="tracking-wider text-xl text-white">
              Hacemos el envío
            </h1>
            <h1 className="text-white text-sm w-48">
              Mediante Empresas de Mensajería
            </h1>
          </span>
        </div>
        <div className="col-span-4 xl:col-span-1 flex flex-col gap-4 justify-center items-center">
          <div className="flex justify-center text-center">
            <span className="bg-black/30 border border-zinc-800 p-6 rounded-full transform transition duration-500 hover:scale-[1.1] hover:shadow-lg">
              <ShopRepo className="fill-white/80 h-14 w-14" />
            </span>
          </div>
          <span className="flex flex-col gap-6 text-center">
            <h1 className="tracking-wider text-xl text-white">
              Recibe tu compra
            </h1>
            <h1 className="text-white text-sm w-48">¡Y disfrútala!</h1>
          </span>
        </div>
      </div>
    </section>
  );
}

export default HomeMore;
