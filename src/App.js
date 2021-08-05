import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings_/Settings';
import Sidebar from './components/Sidebar/Sidebar';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />     
      <div className="app-wrapper-content">
        <Route path='/dialogs' render={ () => <Dialogs store={props.store} />} />
        <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage} 
          dispatch={props.dispatch} />} />
        <Route path='/news' render={ () => <News />} />
        <Route path='/music' render={ () => <Music />} />
        <Route path='/settings' render={ () => <Settings />} />
      </div>     
    </div>
  );
}

export default App;
