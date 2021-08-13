import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([ {id: 1, fullName: 'Slava', isFollowed: true, status: 'Street racer', location: {city: 'Minsk', country: 'Belarus'}, photoUrl: 'https://uznayvse.ru/images/celebs/2018/1/vyacheslav-chepurchenko_big.jpg'},
        {id: 2, fullName: 'Marina', isFollowed: false, status: 'Professional photographer', location: {city: 'Moscow', country: 'Russia'}, photoUrl: 'https://uznayvse.ru/images/celebs/2020/2/marina-orlova_big.jpg'},
        {id: 3, fullName: 'Gleb', isFollowed: true, status: 'Insert status here', location: {city: 'Brest', country: 'Belarus'}, photoUrl: 'https://fcminsk.by/wp-content/uploads/2001/05/gleb-gurban.png'},
    ]);
    }
    return (
        <div>
            {
                props.users.map( (u, index) => {
                    return (<div key = {index}>
                        <div>
                            <div>
                                <img src={u.photoUrl} alt='profile' className={styles.userPhoto}></img>
                            </div>
                            <div>
                                {u.isFollowed ? 
                                <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> :
                                <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{u.location.city}</div>
                                <div>{u.location.country}</div>
                            </div>
                        </div>
                    </div>);
                })
            }
        </div>
    );
};

export default Users;
