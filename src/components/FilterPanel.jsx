/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { categoryList } from '../constants/testConstant';
import Slider from './filters/Slider';
import Toogle from './filters/Toogle';
import Checkbox from './filters/Checkbox';

function FilterPanel({
  selectedCategory,
  selectCategory,
  selectedPrice,
  cuisines,
  changeChecked,
  changePrice
}) {
  return (
    <div>
      <div className="input-group">
        <p className="label">Category</p>
        <Toogle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectCategory}
        />
      </div>
      <div className="input-group">
        <p className="label">Cuisine</p>
        {cuisines.map((cuisine) => (
          <Checkbox
            key={cuisine.id}
            cuisine={cuisine}
            changeChecked={changeChecked}
          />
        ))}
      </div>
      <div className="input-group">
        <p className="label-range">Price Range</p>
        <Slider value={selectedPrice} changePrice={changePrice} />
      </div>
    </div>
  );
}

export default FilterPanel;
