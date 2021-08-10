import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
//import p from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  
  return (
    <div>
      <div>
        <ProfileInfo />
        <MyPostsContainer />
      </div>
    </div>);
}

export default Profile;