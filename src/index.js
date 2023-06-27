//1 - carga librerias y dependencias iniciales (react, etc)
//2 - se encarga de conectar un componente react con el dom

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import './header';
import '../src/components/ItemListContainer/ItemListContainer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


