/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Book(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M5.562 18.167q-.729 0-1.229-.5-.5-.5-.5-1.229V3.562q0-.729.5-1.229.5-.5 1.229-.5h8.876q.729 0 1.229.5.5.5.5 1.229v12.876q0 .729-.5 1.229-.5.5-1.229.5zm0-1.729h8.876V3.562h-1.417v6.5l-2-1-2 1v-6.5H5.562v12.876zm0 0V3.562v12.876zm3.459-6.376l2-1 2 1-2-1-2 1z" />
    </svg>
  );
}

export default Book;
