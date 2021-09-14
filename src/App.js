import React, { Suspense } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings_/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import UsersContainer from './components/Users/UsersContainer';
import { initializeAPP } from './redux/appReducer';
import store from './redux/reduxStore';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {
  componentDidMount() { 
    this.props.initializeAPP();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Sidebar />     
        <div className="app-wrapper-content">
          <Suspense fallback={<Preloader />}>
            <Route path='/dialogs' render={ () => <DialogsContainer />} />
            <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
          </Suspense>         
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

const AppContainer = compose(withRouter, connect(mapStateToProps, {initializeAPP}))(App);

const Main = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store} >
         <AppContainer />
      </Provider>        
    </BrowserRouter>
  ); 
}

export default Main;
