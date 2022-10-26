/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Check(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M8.229 14.062l-3.521-3.541L5.75 9.479l2.479 2.459 6.021-6L15.292 7z" />
    </svg>
  );
}

export default Check;
