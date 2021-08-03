import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addMessage, addPost, subscribe, updateMessageText, updatePostText} from './redux/state';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';

export let globalRerender = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} addPost={addPost} updatePostText={updatePostText}
        addMessage={addMessage} updateMessageText={updateMessageText}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  };

globalRerender(state);

subscribe(globalRerender);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
