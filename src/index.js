import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import { ToTop } from "./components/ScrollToTop/ScrollToTop"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="goit-react-hw-05-movies">
      <App />
      <ToTop />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'));

