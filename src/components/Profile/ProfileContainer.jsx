import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount () {
        let user = this.props.match.params.userId;
        if (!user){
            user = 2;
        };
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${user}`).then(response => {
            this.props.setUserProfile(response.data)});
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