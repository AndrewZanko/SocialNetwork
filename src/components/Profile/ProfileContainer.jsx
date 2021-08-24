import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserProfile } from '../../redux/profileReducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';


class ProfileContainer extends React.Component {
    componentDidMount () {
        let user = this.props.match.params.userId;
        if (!user){
            user = 2;
        };
        this.props.getUserProfile(user);
    }

    render () { //passing all props further
        
        return <Profile {...this.props} />
    }
};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
    profile: state.profilePage.userProfile,
});

let WithURLDataProfileContainer = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(WithURLDataProfileContainer);