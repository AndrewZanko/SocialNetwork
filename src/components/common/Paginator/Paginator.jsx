import React, { useEffect, useState } from 'react';
import styles from './Paginator.module.css';
import cn from 'classnames';

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChainged, portionSize}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };
    
    let portionCount = Math.ceil(totalItemsCount / portionSize);
    
    let [portionNumber, setPortionNumber] = useState(1);
    
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    
    useEffect(()=>setPortionNumber(Math.ceil(currentPage/portionSize)), [currentPage, portionSize]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.paginator}>
                {portionNumber > 1 &&
                    // <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>
                    <span className={styles.leftArrow} onClick={() => {setPortionNumber(portionNumber - 1)}} />
                }
                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p, index) => {
                    return (<span className={cn ({[styles.selectedPage]: currentPage === p}, styles.pageNumber) } key = {index}
                        onClick={(e)=>{onPageChainged(p)}}>{p}</span>);
                    })
                }
                {portionNumber < portionCount &&
                    // <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>
                    <span className={styles.rightArrow} onClick={() => {setPortionNumber(portionNumber + 1)}}/>
                }
            </div>
        </div>        
    )
}

export default Paginator;