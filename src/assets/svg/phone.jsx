/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Phone(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M15.896 16.979q-2.563-.208-4.834-1.281-2.27-1.073-3.989-2.802-1.719-1.729-2.802-4T3 4.062q-.042-.437.26-.76T4 2.979h2.833q.355 0 .615.209.26.208.344.562l.5 2.229q.041.25-.021.5-.063.25-.25.438L6 8.958q.875 1.584 2.146 2.854Q9.417 13.083 11 13.958l2.062-2q.209-.208.459-.26.25-.052.479-.01l2.229.479q.354.083.563.354.208.271.208.625v2.833q0 .563-.396.792-.396.229-.708.208zM5.312 7.5l1.459-1.458-.354-1.563H4.542q.104.792.291 1.542.188.75.479 1.479zm7.167 7.167q.729.291 1.49.468.76.177 1.531.282v-1.875l-1.562-.334zM5.312 7.5zm7.167 7.167z" />
    </svg>
  );
}

export default Phone;
