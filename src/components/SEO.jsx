/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { Helmet } from 'react-helmet';

import React from 'react';

function SEO(props) {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Helmet>
  );
}

export default SEO;
