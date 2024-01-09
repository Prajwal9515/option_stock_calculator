import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HOME from './COMPONENTS/HOME';

function App() {
  return (
   <>
   
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HOME/>} />
    </Routes>
  </BrowserRouter>

   </>
  );
}

export default App;
