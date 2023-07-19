import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import {addTask, removeTask} from "./action";

const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(addTask("Task 1"));

console.log(store.getState(), "==== store");
store.dispatch(removeTask(1));
console.log(store.getState(), "==== store");

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
