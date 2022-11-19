/* eslint-disable react/self-closing-comp */
import React from 'react';

function Best() {
  const img = 'https://pbs.twimg.com/media/FOuv4FWUcAES64P.jpg';
  return (
    <section className="flex flex-col pt-20">
      <span className="flex flex-row gap-1 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={20}
          width={20}
          className="fill-red-500/80"
        >
          <path d="M10 15q-2.083 0-3.542-1.458Q5 12.083 5 10q0-2.083 1.458-3.542Q7.917 5 10 5q2.083 0 3.542 1.458Q15 7.917 15 10q0 2.083-1.458 3.542Q12.083 15 10 15z" />
        </svg>
        <h1 className="flex text-white/80 text-xl capitalize font-bold">
          Descubre lo mejor
        </h1>
      </span>
      <hr className="border-zinc-800 w-full mt-2" />
      <div className="grid grid-cols-6 gap-8 px-16 pt-10">
        <div className="col-span-3 rounded-md bg-black/30 shadow-lg">
          <div className="grid grid-cols-2">
            <div className="col-span-1 flex justify-start p-8 relative">
              <span className="flex flex-col gap-7">
                <h1 className="text-white/50 tracking-widest dark:text-zinc-300 font-bold uppercase">
                  Por compras superiores a $150.000
                </h1>
                <p className="text-zinc-300 uppercase tracking-widest dark:text-zinc-100 font-bold text-3xl">
                  MANGAS HASTA UN 5% OFF
                </p>
                <span className="flex justify-start">
                  <button
                    type="button"
                    className="py-1 px-6 border rounded-md border-white/20 bg-zinc-800"
                  >
                    <h1 className="text-white/80 font-bold text-xs">Ver más</h1>
                  </button>
                </span>
              </span>
            </div>
            <div className="col-span-1 flex justify-end">
              <img
                src={img}
                alt="Libros hasta un 30% off"
                className="rounded-r-md object-cover"
              />
            </div>
          </div>
        </div>
        <div className="col-span-3 rounded-md bg-black/30 shadow-lg">
          <div className="grid grid-cols-2">
            <div className="col-span-1 flex justify-start p-8 relative">
              <span className="flex flex-col gap-7">
                <h1 className="text-white/50 tracking-widest dark:text-zinc-300 font-bold uppercase">
                  Por compras superiores a $300.000
                </h1>
                <p className="text-zinc-300 uppercase tracking-widest dark:text-zinc-100 font-bold text-3xl">
                  MANGAS HASTA UN 10% OFF
                </p>
                <span className="flex justify-start">
                  <button
                    type="button"
                    className="py-1 px-6 border rounded-md border-white/20 bg-zinc-800"
                  >
                    <h1 className="text-white/80 font-bold text-xs">Ver más</h1>
                  </button>
                </span>
              </span>
            </div>
            <div className="col-span-1 flex justify-end">
              <img
                src={img}
                alt="Libros hasta un 30% off"
                className="rounded-r-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Best;
