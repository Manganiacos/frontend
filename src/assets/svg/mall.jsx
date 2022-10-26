/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Mall(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
      <path d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V8q0-.825.587-1.412Q4.175 6 5 6h2q0-2.075 1.463-3.538Q9.925 1 12 1t3.538 1.462Q17 3.925 17 6h2q.825 0 1.413.588Q21 7.175 21 8v12q0 .825-.587 1.413Q19.825 22 19 22zm0-2h14V8H5v12zm7-6q2.075 0 3.538-1.463Q17 11.075 17 9h-2q0 1.25-.875 2.125T12 12q-1.25 0-2.125-.875T9 9H7q0 2.075 1.463 3.537Q9.925 14 12 14zM9 6h6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6zM5 20V8v12z" />
    </svg>
  );
}

export default Mall;
