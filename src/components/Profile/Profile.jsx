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
         addPost={props.addPost} updatePostText={props.updatePostText}/>
      </div>
    </div>);
}

export default Profile;