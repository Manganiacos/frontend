/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import NormaSection from './sections/NormaSection';
import IvreaSection from './sections/IvreaSection';
import PaniniSection from './sections/PaniniSection';
import EccSection from './sections/EccSection';
import KamiteSection from './sections/KamiteSection';

function Sections() {
  return (
    <>
      <section className="flex flex-col pt-20 px-4 lg:px-0">
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
            Las mejores editoriales
          </h1>
        </span>
        <hr className="border-zinc-800 w-full mt-2" />

        <div className="grid grid-cols-5 gap-8 pt-10">
          <div className="col-span-5 lg:col-span-1">
            <NormaSection />
          </div>
          <div className="col-span-5 lg:col-span-1">
            <IvreaSection />
          </div>
          <div className="col-span-5 lg:col-span-1">
            <PaniniSection />
          </div>{' '}
          <div className="col-span-5 lg:col-span-1">
            <EccSection />
          </div>
          <div className="col-span-5 lg:col-span-1">
            <KamiteSection />
          </div>
        </div>
      </section>
    </>
  );
}

export default Sections;
