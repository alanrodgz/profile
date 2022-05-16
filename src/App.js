import React from 'react';
import {Header, Navbar, About, Footer } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
