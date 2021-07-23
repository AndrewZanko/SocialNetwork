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

let dialogs = [
    {id: 1, name: "Andrew"},
    {id: 2, name: "Oleg"},
    {id: 3, name: "Pasha"},
    {id: 4, name: "Denis"},
    {id: 5, name: "Katya"},
];

let messages = [
    {id: 1, message: "Hi!"},
    {id: 2, message: "Going well!"},
    {id: 3, message: "Any plans for tonight?"},
];

let dialogsElements = dialogs.map(d => { return <DialogItem name={d.name} id={d.id} />});
let messagesElements = messages.map(m => {return <Message message={m.message} />})

const Dialogs = () => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;
