import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './../Dialogs.module.css';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={d.dialogs + ' ' + d.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;
