import React from 'react';
import {Footer, Topbar} from './components';


const Minimal = props => {
  const {children} = props;

  return (
    <div>
      <Topbar/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Minimal;
