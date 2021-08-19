import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer />
      </div>
    </div>);
}

export default Profile;