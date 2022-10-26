/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Contact(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M3.75 15.583q-.562 0-.948-.385-.385-.386-.385-.948v-8.5q0-.562.385-.948.386-.385.948-.385h12.5q.562 0 .948.385.385.386.385.948v8.5q0 .562-.385.948-.386.385-.948.385zM10 10.625L3.5 6.812v7.438q0 .104.073.177t.177.073h12.5q.104 0 .177-.073t.073-.177V6.812zm0-1.396L16.375 5.5H3.625zM3.5 6.812V5.5v8.75q0 .104.073.177t.177.073H3.5v-.25z" />
    </svg>
  );
}

export default Contact;
