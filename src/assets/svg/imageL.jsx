/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function ImageL(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M5 17q-.833 0-1.417-.583Q3 15.833 3 15V5q0-.833.583-1.417Q4.167 3 5 3h10q.833 0 1.417.583Q17 4.167 17 5v10q0 .833-.583 1.417Q15.833 17 15 17zm0-1h10q.417 0 .708-.292Q16 15.417 16 15V5q0-.417-.292-.708Q15.417 4 15 4H5q-.417 0-.708.292Q4 4.583 4 5v10q0 .417.292.708Q4.583 16 5 16zm1-2l2.604-2.604 1.25 1.25 1.542-1.938L14 14zm1-5.5q-.625 0-1.062-.438Q5.5 7.625 5.5 7t.438-1.062Q6.375 5.5 7 5.5t1.062.438Q8.5 6.375 8.5 7t-.438 1.062Q7.625 8.5 7 8.5z" />
    </svg>
  );
}

export default ImageL;
