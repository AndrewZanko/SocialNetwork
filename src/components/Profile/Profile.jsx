import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import p from './Profile.module.css';

const Profile = () => {
  return <div>
    <div>
      <img className={p.img} src="https://www.potidea-palace.com/wp-content/uploads/elementor/thumbs/A-beach-to-behold-Halkidiki%E2%80%99s-most-unique-beaches-ol5gkj7ff58eyfz0tipioyfe2zgpuroidmogct6g6o.jpg" alt="beach" />
    </div>
    <div>
      <div>
        Avatar + description
      </div>
      <MyPosts />
    </div>
  </div>
}

export default Profile;