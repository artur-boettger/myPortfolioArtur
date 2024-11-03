import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextProvider from './contexts/ThemeContext'
import i18n from './i18n';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  <Suspense fallback="loading">
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </Suspense>,
  document.getElementById('root')
);


reportWebVitals();
