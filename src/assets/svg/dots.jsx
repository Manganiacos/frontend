/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Dots(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M5.5 11.5q-.625 0-1.062-.438Q4 10.625 4 10t.438-1.062Q4.875 8.5 5.5 8.5t1.062.438Q7 9.375 7 10t-.438 1.062q-.437.438-1.062.438zm4.5 0q-.625 0-1.062-.438Q8.5 10.625 8.5 10t.438-1.062Q9.375 8.5 10 8.5t1.062.438q.438.437.438 1.062t-.438 1.062q-.437.438-1.062.438zm4.5 0q-.625 0-1.062-.438Q13 10.625 13 10t.438-1.062Q13.875 8.5 14.5 8.5t1.062.438Q16 9.375 16 10t-.438 1.062q-.437.438-1.062.438z" />
    </svg>
  );
}

export default Dots;
