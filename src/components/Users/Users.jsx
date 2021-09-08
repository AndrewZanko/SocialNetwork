import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';


const Users = ({currentPage, totalUsersCount, pageSize, onPageChainged, ...props}) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };
    
    return (
        <div>
            <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize} onPageChainged={onPageChainged} />
            <div>
                {
                    props.users.map((u, index) => <User key={index} user={u}
                        followingInProgress={props.followingInProgress}
                        follow={props.follow} unfollow={props.unfollow} />)
                }
            </div>           
        </div>
    )
}

export default Users;
