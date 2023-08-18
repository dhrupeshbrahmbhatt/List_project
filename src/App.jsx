import React, { useState } from 'react';
import { DataEntry } from './components/DataEntry';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListSwapper } from './components/List';
import { Home } from './components/home';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<DataEntry />} />
        <Route path='/list' element={<ListSwapper />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
