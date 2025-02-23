import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { makeStore } from './redux/store.js';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={makeStore}>
      <App />
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
