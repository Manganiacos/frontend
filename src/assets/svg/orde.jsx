/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Orde(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M12.583 15.583v1.105q0 .374-.26.635-.261.26-.635.26H3.312q-.374 0-.635-.26-.26-.261-.26-.635v-5.376q0-.374.26-.635.261-.26.635-.26h2.105V7q0-1.917 1.333-3.25T10 2.417h3q1.917 0 3.25 1.333T17.583 7v10.583H16.5v-2zm0-1.083H16.5V7q0-1.458-1.021-2.479Q14.458 3.5 13 3.5h-3q-1.458 0-2.479 1.021Q6.5 5.542 6.5 7v3.417h5.188q.374 0 .635.26.26.261.26.635zM9.208 8.292V7.208h4.584v1.084zM7.5 13.729l4-2.229h-8zm0 1.188l-4-2.229V16.5h8v-3.812zm-4-3.417v5-5z" />
    </svg>
  );
}

export default Orde;
