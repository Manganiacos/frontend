/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import Slider from '../components/Slider';
import SEO from '../components/SEO';

import News from '../components/News';
import Best from '../components/Best';
import Editorials from '../components/Editorials';

function HomePage() {
  return (
    <>
      <SEO title="Inicio" description="Manganiacos" />
      <section className="container xl:mx-auto grid grid-cols-3 py-0 xl:py-12 h-full pb-56">
        <div className="col-span-3">
          <Slider />
        </div>
        <div className="col-span-3">
          <News />
        </div>
        <div className="col-span-3">
          <Best />
        </div>
        <div className="col-span-3">
          <Editorials />
        </div>
      </section>
    </>
  );
}

export default HomePage;
