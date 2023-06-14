import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from "redux";

import reducers from "./reducers";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

const reduxStore = createStore(reducers, applyMiddleware(thunk))
root.render(
  //<React.StrictMode>
    <Provider store = {reduxStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>

    </Provider>

  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
