import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Root from "./root"
import * as serviceWorker from './serviceWorker';
import axios from "axios";
import configureStore from './store/store';


document.addEventListener("DOMContentLoaded", () => {

    let store = configureStore();
    window.axios = axios;
    window.store = store;
    ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
})
    