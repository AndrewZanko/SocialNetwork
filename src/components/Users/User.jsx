import React from 'react';
import styles from './Users.module.css';
import userPhoto from './../../assets/images/user.png'
import { NavLink } from 'react-router-dom';


const User = ({user, followingInProgress, unfollow, follow}) => {

    return (
        <div>
            <div>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                          <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='profile' className={styles.userPhoto}></img>
                    </NavLink> 
                </div>
                <div>
                    {user.followed ? 
                       <button disabled={followingInProgress.some(id => (id === user.id))} 
                        onClick={()=>{unfollow(user.id)}} className={styles.buttonUnfollow}>Unfollow</button> :
                        <button disabled={followingInProgress.some(id => (id === user.id))}
                        onClick={()=>{follow(user.id)}} className={styles.buttonFollow}>Follow</button>
                    }
                </div>
            </div>
            <div className={styles.userInfo}>
                <div className={styles.userName}>{user.name}</div>
                <div className={styles.userStatus}>{user.status || 'No status set'}</div>
            </div>
        </div>        
    )
}

export default User;
