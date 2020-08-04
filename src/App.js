import React from 'react';
import './index.css';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="container">
      <Header name="Nicaberry"></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
