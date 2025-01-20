import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import './assets/App.css';
import App from './pages/App';

// Создаём корневой элемент с использованием createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим компонент App внутри Provider
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
