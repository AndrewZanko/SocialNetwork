import React from 'react';
import MyPosts from './MyPosts/MyPosts';
//import p from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  
  return (
    <div>
      <div>
        <ProfileInfo />
        <MyPosts posts={props.profilePage.posts} postText={props.profilePage.postText}
         dispatch={props.dispatch} />
      </div>
    </div>);
}

export default Profile;