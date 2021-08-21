import React from 'react';
import styles from './Users.module.css';
import userPhoto from './../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import { followAPI } from '../../api/api';


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };
    
    return (
        <div>
            <div>
                {pages.map((p, index) => {
                    return (<span key = {index} className={props.currentPage === p ? styles.selectedPage : null}
                        onClick={(e)=>{props.onPageChainged(p)}}>{p}</span>);
                    })}
            </div>
            {
                props.users.map( (u, index) => {
                    return (<div key = {index}>
                        <div>
                            <div>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='profile' className={styles.userPhoto}></img>
                                </NavLink>    
                            </div>
                            <div>
                                {u.isFollowed ? 
                                    <button disabled={props.followingInProgress.some(id => (id === u.id))} onClick={()=>{
                                        props.toggleFollowingProgress(true, u.id);
                                        followAPI.userUnfollow(u.id).then(data => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(u.id);
                                            };
                                            props.toggleFollowingProgress(false, u.id);
                                        });
                                    }}>Unfollow</button> :
                                    <button disabled={props.followingInProgress.some(id => (id === u.id))} onClick={()=>{
                                        props.toggleFollowingProgress(true, u.id);
                                        followAPI.userFollow(u.id).then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(u.id);
                                            };
                                            props.toggleFollowingProgress(false, u.id);
                                        });                                       
                                    }}>Follow</button>}
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{"u.location.city"}</div>
                                <div>{"u.location.country"}</div>
                            </div>
                        </div>
                    </div>);
                })
            }
        </div>
    )
}

export default Users;
