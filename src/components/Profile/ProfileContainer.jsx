import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getStatus, getUserProfile, savePhoto, updateStatus } from '../../redux/profileReducer';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    refreshProfile() {
        let user = this.props.match.params.userId;
        if (!user){
            //user = 19185;
            user = this.props.authorizedUserId;
            if (!user) {
                this.props.history.push('/login');
            }
        };
        this.props.getUserProfile(user);
        this.props.getStatus(user);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {        
        return <Profile {...this.props} isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto}/>
    }
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.userProfile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth  
});

export default compose(connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}), withRouter)(ProfileContainer);