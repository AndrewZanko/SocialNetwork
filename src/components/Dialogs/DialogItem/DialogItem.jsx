import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './DialogItem.module.css';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={d.dialogs}>
            <img src={props.ava} className={d.ava} alt="dialog avatar"/>
            <NavLink to={path} activeClassName={d.activeDialog}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;
