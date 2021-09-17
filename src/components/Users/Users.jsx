import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import styles from './Users.module.css';

const Users = ({currentPage, totalUsersCount, pageSize, onPageChainged, ...props}) => {
    
    return (
        <div>
            <Paginator currentPage={currentPage} totalItemsCount={totalUsersCount} pageSize={pageSize} onPageChainged={onPageChainged} portionSize={10} />
            <div className={styles.wrapper}>
                <div className={styles.left}>
                {
                    props.users.filter((u, index) => index < props.users.length / 2).map((u, index) => <User key={index} user={u}
                        followingInProgress={props.followingInProgress}
                        follow={props.follow} unfollow={props.unfollow} />)
                }
                </div>
                <div className={styles.right}>
                {
                    props.users.filter((u, index) => index >= props.users.length / 2).map((u, index) => <User key={index} user={u}
                        followingInProgress={props.followingInProgress}
                        follow={props.follow} unfollow={props.unfollow} />)
                }
                </div>               
            </div>           
        </div>
    )
}

export default Users;
