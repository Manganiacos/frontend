/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Shield(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M10 18q-2.812-.688-4.656-3.188Q3.5 12.312 3.5 9.271V4.5L10 2l6.5 2.5v4.771q0 3.041-1.844 5.541Q12.812 17.312 10 18zm0-1.562q2.021-.626 3.365-2.407Q14.708 12.25 14.938 10H10V3.604L5 5.521v3.75q0 .187.021.364t.041.365H10z" />
    </svg>
  );
}

export default Shield;
