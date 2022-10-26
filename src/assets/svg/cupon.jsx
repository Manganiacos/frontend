/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Cupon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M6.75 14h1.5v-1H9q.417 0 .708-.292Q10 12.417 10 12v-1.75q0-.417-.292-.708Q9.417 9.25 9 9.25H6.5V8.5H10V7H8.25V6h-1.5v1H6q-.417 0-.708.292Q5 7.583 5 8v1.75q0 .417.292.708.291.292.708.292h2.5v.75H5V13h1.75zm6.75-1l1.5-1.5h-3zM12 8.5h3L13.5 7zM3.5 16q-.625 0-1.062-.438Q2 15.125 2 14.5v-9q0-.625.438-1.062Q2.875 4 3.5 4h13q.625 0 1.062.438Q18 4.875 18 5.5v9q0 .625-.438 1.062Q17.125 16 16.5 16zm0-1.5h13v-9h-13v9zm0 0v-9 9z" />
    </svg>
  );
}

export default Cupon;
