import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './Dialogs.module.css';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={d.dialogs + ' ' + d.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return <div className={d.message}>{props.message}</div>;
}

const Dialogs = () => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <DialogItem name="Andrew" id="1"/>
                <DialogItem name="Oleg" id="2"/>
                <DialogItem name="Pasha" id="3"/>
                <DialogItem name="Denis" id="4"/>
                <DialogItem name="Katya" id="5"/>
            </div>
            <div className={d.messages}>
                <Message message="Hi!" />
                <Message message="Going well!" />
                <Message message="Any plans for tonight?" />
            </div>
        </div>
    );
};

export default Dialogs;
