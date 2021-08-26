import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getStatus, getUserProfile, updateStatus } from '../../redux/profileReducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
    componentDidMount () {
        let user = this.props.match.params.userId;
        if (!user){
            user = 19185;
        };
        this.props.getUserProfile(user);
        this.props.getStatus(user);
    }

    render () { //passing all props further        
        return <Profile {...this.props} />
    }
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.userProfile,
    status: state.profilePage.status  
});


export default compose(connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}), withRouter, withAuthRedirect)(ProfileContainer);