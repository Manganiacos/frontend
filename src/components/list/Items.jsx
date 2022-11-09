/* eslint-disable react/prop-types */
import React from 'react';

function Items({ item: { title } }) {
  return (
    <div className="listItem-wrap">
      <header>
        <h4>{title}</h4>
      </header>
    </div>
  );
}

export default Items;
