import React from 'react';
import './index.css';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

function App() {

  const emoji = [<span role='img' aria-label='strawberry'>&#127827;</span>,
    <span role='img' aria-label='cucumber'>&#129362;</span>, 
    <span role='img' aria-label='egg'>&#129370;</span>,
    <span role='img' aria-label='cake'>&#127856;</span>,
    <span role='img' aria-label='citrus'>&#127819;</span>,];

  return (
    <div className="container">
      <Header name="Nicaberry"></Header>
      <Body emoji={emoji}></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
