import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.css';
import './styles.scss';
import { createStore } from "redux";
import { Provider } from "react-redux";
import {featureReducer} from "./reducers";

const store = createStore(featureReducer);
console.log('store state in index.js', store.getState());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

