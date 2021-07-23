import React from 'react';
import pi from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={pi.img} src="https://www.potidea-palace.com/wp-content/uploads/elementor/thumbs/A-beach-to-behold-Halkidiki%E2%80%99s-most-unique-beaches-ol5gkj7ff58eyfz0tipioyfe2zgpuroidmogct6g6o.jpg" alt="beach" />
            </div>
            <div className={pi.avaDesrBlock}>
                Avatar + description
            </div>
        </div>
    );
}

export default ProfileInfo;