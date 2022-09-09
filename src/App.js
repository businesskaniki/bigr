import './App.css';
import './Mobile.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </div>
  );
}

export default App;
