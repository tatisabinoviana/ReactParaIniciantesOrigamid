import React from 'react';
import './App.css';
import foto from './img/foto.jpg';
import { ReactComponent as Dog } from './img/dog.svg';
import DogSvg from './DogSvg';

const App = () => {
  return (
    <div>
      <p className="fundo"></p>
      <DogSvg color="#84e" olho="5" />
      <img src={foto} alt="Cachorro" />
    </div>
  );
};

export default App;
