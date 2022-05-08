import React from 'react';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

export default function withLayout(Component) {
  return (props) => (
    <>
      <Header />
      <Component {...props} />
      <Footer />
    </>
  );
}
