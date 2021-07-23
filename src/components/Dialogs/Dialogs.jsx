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

let dialogsData = [
    {id: 1, name: "Andrew"},
    {id: 2, name: "Oleg"},
    {id: 3, name: "Pasha"},
    {id: 4, name: "Denis"},
    {id: 5, name: "Katya"},
];

let messagesData = [
    {id: 1, message: "Hi!"},
    {id: 2, message: "Going well!"},
    {id: 3, message: "Any plans for tonight?"},
];


const Dialogs = () => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>
            <div className={d.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </div>
    );
};

export default Dialogs;
