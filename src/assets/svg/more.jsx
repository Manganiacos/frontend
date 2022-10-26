/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function More(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M10 13.062l-5-5L6.062 7 10 10.938 13.938 7 15 8.062z" />
    </svg>
  );
}

export default More;
