import React from 'react';

function Banner({children}) {
  // console.log(props)
  return <section className="banner-backdrop">{children}</section>;
}

export default Banner;
