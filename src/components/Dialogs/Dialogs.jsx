import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import d from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((di, index) => { return <DialogItem name={di.name} id={di.id} ava={di.ava} key={index}/>});
    let messagesElements = props.dialogsPage.messages.map((m, index) => {return <Message message={m.message} key={index}/>})

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.dispatch({type: 'ADD_MESSAGE'});
    }

    let onMessageUpdate = () => {
        let text = newMessageElement.current.value;
        props.dispatch({type: 'UPDATE_MESSAGE_TEXT', newText: text});
    }
  
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                <div className={d.messageItems}>
                    {messagesElements}
                </div>               
                <div className={d.textarea}>
                    <textarea onChange={onMessageUpdate} ref={newMessageElement} value={props.dialogsPage.messageText} />
                </div>
                <div className={d.sendbutton}>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
