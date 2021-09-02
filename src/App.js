import { connect } from 'react-redux';
import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings_/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import UsersContainer from './components/Users/UsersContainer';
import { initializeAPP } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() { 
    this.props.initializeAPP();
  }

  render() {
    if (!this.props.initialized) {
      //debugger
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Sidebar />     
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={ () => <DialogsContainer />} />
          <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
          <Route path='/users' render={ () => <UsersContainer />} />
          <Route path='/news' render={ () => <News />} />
          <Route path='/music' render={ () => <Music />} />
          <Route path='/settings' render={ () => <Settings />} />
          <Route path='/login' render={ () => <Login />} />
        </div>     
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default compose(withRouter, connect(mapStateToProps, {initializeAPP}))(App);
