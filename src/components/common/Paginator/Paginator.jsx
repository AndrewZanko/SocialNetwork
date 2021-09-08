import React from "react";
import styles from './Paginator.module.css';

const Paginator = (totalUsersCount, pageSize, currentPage, onPageChainged) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };
    
    return (
        <div>
            <div>
                {pages.map((p, index) => {
                    return (<span key = {index} className={currentPage === p ? styles.selectedPage : null}
                        onClick={(e)=>{onPageChainged(p)}}>{p}</span>);
                    })}
            </div>
        </div>
    )
}

export default Paginator;