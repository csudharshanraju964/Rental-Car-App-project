import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CarRentalProvider } from './components/CarRentalProvider';
<<<<<<< HEAD
=======

>>>>>>> 89b7f8290fd13b91b1e6d4c1f65558732d0ebb24
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <CarRentalProvider>
    <App />
  </CarRentalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
