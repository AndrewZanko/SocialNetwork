import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateMessageText, updatePostText} from './redux/state';

export let globalRerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updatePostText={updatePostText}
      addMessage={addMessage} updateMessageText={updateMessageText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

