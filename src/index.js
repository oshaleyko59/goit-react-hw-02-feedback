import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import options from 'data/options.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App options={options} />
  </React.StrictMode>
);
