import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import FloatingIcons from './Components/FloatingIcons';
import Laptop from './Components/Laptop';
import Volume from './Components/Volume';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
    <Header />
    <FloatingIcons />
    <div style={{ overflow: 'hidden', position: 'relative', zIndex: 999 }}>
      <Laptop />

    </div>
    <Volume />
    <Footer />
  </div>
  );
}

export default App;
