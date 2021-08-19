import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import pi from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (<Preloader />);
    }
    return (
        <div>
            <div>
                <img className={pi.img} src="https://www.potidea-palace.com/wp-content/uploads/elementor/thumbs/A-beach-to-behold-Halkidiki%E2%80%99s-most-unique-beaches-ol5gkj7ff58eyfz0tipioyfe2zgpuroidmogct6g6o.jpg" alt="beach" />
            </div>
            <div className={pi.avaDesrBlock}>
                <img src={props.profile.photos.large} alt='profile logo'></img>
                Avatar + description
            </div>
        </div>
    );
}

export default ProfileInfo;