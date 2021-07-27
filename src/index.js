import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  {id: 1, name: "Andrew"},
  {id: 2, name: "Oleg"},
  {id: 3, name: "Pasha"},
  {id: 4, name: "Denis"},
  {id: 5, name: "Katya"},
];

let messages = [
  {id: 1, message: "Hi!"},
  {id: 2, message: "Going well!"},
  {id: 3, message: "Any plans for tonight?"},
];

let posts = [
  {id: 1, message: "what's up, dudes", likesCount: 15},
  {id: 2, message: "going well XD", likesCount: 20},
];

ReactDOM.render(
  <React.StrictMode>
    <App posts = {posts} dialogs= {dialogs} messages = {messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
