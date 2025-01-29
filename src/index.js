import { BrowserRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
//
//<BrowserRouter basename="">
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
   <BrowserRouter basename="">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
