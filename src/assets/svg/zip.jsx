/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Zip(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M13 10l2 2v1.5h-4.25v4.75L10 19l-.75-.75V13.5H5V12l2-2V4.5H6V3h8v1.5h-1zm-5.875 2h5.75L11.5 10.625V4.5h-3v6.125zM10 12z" />
    </svg>
  );
}

export default Zip;
