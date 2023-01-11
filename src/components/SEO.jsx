/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { Helmet } from 'react-helmet';

import React from 'react';

function SEO(props) {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="image" property="og:image" content={props.image} />
      <meta name="twitter:image" content={props.twitter} />
    </Helmet>
  );
}

export default SEO;
