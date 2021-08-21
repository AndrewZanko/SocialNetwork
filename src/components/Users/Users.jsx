import React from 'react';
import styles from './Users.module.css';
import userPhoto from './../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

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
                                    <button onClick={()=>{
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true,
                                        headers: {
                                            'API-KEY': 'b7535a46-755b-4223-beff-d967170a7d8b' 
                                        }}).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id);
                                            }
                                        });
                                    }}>Unfollow</button> :
                                    <button onClick={()=>{
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{}, {withCredentials: true,
                                        headers: {
                                            'API-KEY': 'b7535a46-755b-4223-beff-d967170a7d8b'
                                        }}).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
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
