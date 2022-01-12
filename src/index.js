// this import 1st import allows us to use react library
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Repairs} from './components/repair.js';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
//import { Repairs } from './components/repair';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Repairs />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
