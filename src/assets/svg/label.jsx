/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Label(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M17.188 10l-3.605 4.521q-.25.312-.604.479-.354.167-.75.167H5.542q-.709 0-1.219-.511-.511-.51-.511-1.218V6.562q0-.708.511-1.218.51-.511 1.219-.511h6.687q.396 0 .75.167t.604.479zm-2.209 0l-2.75-3.438H5.542v6.876h6.687zm-9.437 0v3.438-6.876z" />
    </svg>
  );
}

export default Label;
