/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Left(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M12 15l-5-5 5-5 1.062 1.062L9.125 10l3.937 3.938z" />
    </svg>
  );
}

export default Left;
