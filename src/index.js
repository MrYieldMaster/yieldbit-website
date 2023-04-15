import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './assets/styles/global.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faTelegramPlane, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faCoins, faFire, faShieldAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faTelegramPlane, faDiscord, faCoins, faFire, faShieldAlt, faUsers);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


