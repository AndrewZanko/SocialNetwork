import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import pi from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (<Preloader />);
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    
    return (
        <div>
            <div className={pi.avaDesrBlock}>
                <h2>{props.profile.fullName}</h2>
                <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto} alt='profile logo'></img>
                <p>{props.isOwner && <input type='file' onChange={onMainPhotoSelected} />}</p>
                <p>About me: {props.profile.aboutMe}</p>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;