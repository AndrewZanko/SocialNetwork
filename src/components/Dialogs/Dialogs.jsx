import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import d from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((di, index) => { return <DialogItem name={di.name} id={di.id} key={index}/>});
    let messagesElements = props.state.messages.map((m, index) => {return <Message message={m.message} key={index}/>})

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
