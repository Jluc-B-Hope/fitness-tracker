import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import './assets/App.css';
import App from './pages/App';

const root = ReactDOM.createRoot(document.getElementById('root')); // создаём корневой элемент
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
