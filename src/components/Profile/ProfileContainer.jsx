import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { getUserProfile } from '../../redux/profileReducer';


class ProfileContainer extends React.Component {
    componentDidMount () {
        let user = this.props.match.params.userId;
        if (!user){
            user = 2;
        };
        this.props.getUserProfile(user);
    }

    render () { //passing all props further
        if (!this.props.isAuth) return <Redirect to='/login'/>
        return <Profile {...this.props} />
    }
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.userProfile,
    isAuth: state.auth.isAuth
});

let WithURLDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithURLDataProfileContainer);