import React from 'react';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

export default function withLayout(Component) {
  const withLayoutHOC = (props) => (
    <>
      <Header />
      <Component {...props} />
      <Footer />
    </>
  );
  return withLayoutHOC;
}
