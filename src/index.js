import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';

export let globalRerender = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} addPost={store.addPost.bind(store)} updatePostText={store.updatePostText.bind(store)}
        addMessage={store.addMessage.bind(store)} updateMessageText={store.updateMessageText.bind(store)}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  };

globalRerender(store.getState());

store.subscribe(globalRerender);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
