/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-array-index-key */
import React from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Slider() {
  const img1 = 'https://i.ibb.co/Y3CQ4WT/BANNER-PANINI-2022-02.jpg';
  const img2 = 'https://i.ibb.co/hdFkLwY/BANNER-PANINI-2022-01.jpg';

  return (
    <span className="cursor-move">
      <Splide
        options={{
          type: 'loop',
          perPage: 1,
          rewind: true,
          speed: 1000,
          autoplay: true,
          arrows: false,
          pagination: false,
          gap: '8px'
        }}
      >
        <SplideSlide>
          <img
            src={img1}
            className="h-[800px] w-full object-cover rounded-lg"
            alt="Image 1"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={img2}
            className="h-[800px] w-full object-cover rounded-lg"
            alt="Image 3"
          />
        </SplideSlide>
      </Splide>
    </span>
  );
}

export default Slider;
