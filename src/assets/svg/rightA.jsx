/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function rightA(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M8 15l-1.062-1.062L10.875 10 6.938 6.062 8 5l5 5z" />
    </svg>
  );
}

export default rightA;
