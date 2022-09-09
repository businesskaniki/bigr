import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Detail from './Detail';
import Home from './Home';

function Nav() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Detail" element={<Detail />} />
    </Routes>
  );
}

export default Nav;
