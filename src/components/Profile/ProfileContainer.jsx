import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component {
    componentDidMount () {
        let user = this.props.match.params.userId;
        if (!user){
            user = 2;
        };
        profileAPI.getUserProfile(user).then(data => {
            this.props.setUserProfile(data)});
    }

    render () { //passing all props further
        return <Profile {...this.props} />
    }
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.userProfile
});

let WithURLDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithURLDataProfileContainer);