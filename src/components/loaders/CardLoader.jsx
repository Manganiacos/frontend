/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ContentLoader from 'react-content-loader';

function CardLoader() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="container mx-auto grid grid-cols-4 gap-6">
      <div className="col-span-4 grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <ContentLoader
            key={card}
            id={card}
            viewBox="0 0 274 356"
            className="col-span-1"
            height={356}
            width={274}
            speed={2}
            backgroundColor="#111"
            foregroundColor="#11111175"
          >
            <rect x="0" y="0" rx="7" ry="7" width="274" height="356" />
          </ContentLoader>
        ))}
      </div>
    </section>
  );
}

export default CardLoader;
