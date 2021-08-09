import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import { BrowserRouter } from 'react-router-dom';

export let globalRerender = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
  };

globalRerender(store.getState());

store.subscribe(() => {
  let state = store.getState();
  globalRerender(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
