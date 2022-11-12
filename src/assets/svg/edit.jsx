/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Edit(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M4.25 15.75h1.229l7-7-1.229-1.229-7 7zm11.938-8.208l-3.73-3.73 1.021-1.02q.521-.521 1.24-.521t1.239.521l1.25 1.25q.5.5.5 1.239 0 .74-.5 1.24zm-1.23 1.229L6.229 17.5H2.5v-3.729l8.729-8.729zm-3.083-.625l-.625-.625 1.229 1.229z" />
    </svg>
  );
}

export default Edit;
