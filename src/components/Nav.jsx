import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Detail from './Detail';
import Home from './Home';

function Nav() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>

  );
}

export default Nav;
