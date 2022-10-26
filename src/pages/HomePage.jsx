/* eslint-disable react/self-closing-comp */
import React from 'react';
import Slider from '../components/Slider';
import SEO from '../components/SEO';

import News from '../components/News';

function HomePage() {
  return (
    <>
      <SEO title="Inicio" description="Manganiacos" />
      <section className="container mx-auto grid grid-cols-3 py-12 h-full pb-56">
        <div className="col-span-3">
          <Slider />
        </div>
        <div className="col-span-3">
          <News />
        </div>
      </section>
    </>
  );
}

export default HomePage;
