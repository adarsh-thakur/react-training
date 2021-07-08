import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewComp from './NewComp';
import DateTime from './DateTime';
import reportWebVitals from './reportWebVitals';
import EventDemo from './EventDemo';
import UserInput from './UserInput';

ReactDOM.render(
  <React.StrictMode>
    {/* <DateTime /> */}
    {/* <EventDemo /> */}
    <UserInput />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
