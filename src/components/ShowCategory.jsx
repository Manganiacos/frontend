/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import React from 'react';

function ShowCategory({ isShown }) {
  return (
    <>
      {isShown === 'josei' && (
        <h1 className="text-white text-xs capitalize">{isShown}</h1>
      )}
      {isShown === 'seinen' && (
        <h1 className="text-white text-xs capitalize">{isShown}</h1>
      )}
      {isShown === 'shojo' && (
        <h1 className="text-white text-xs capitalize">{isShown}</h1>
      )}
      {isShown === 'shonen' && (
        <h1 className="text-white text-xs capitalize">{isShown}</h1>
      )}
      {isShown === 'kodomo' && (
        <h1 className="text-white text-xs capitalize"> {isShown}</h1>
      )}
    </>
  );
}

export default ShowCategory;
