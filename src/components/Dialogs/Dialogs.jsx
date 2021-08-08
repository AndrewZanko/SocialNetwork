import React from 'react';
import { addMessageActionCreator, messageUpdateActionCreator } from '../../redux/dialogsReducer';
import DialogItem from './DialogItem/DialogItem';
import d from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map((di, index) => { return <DialogItem name={di.name} id={di.id} ava={di.ava} key={index}/>});
    let messagesElements = state.messages.map((m, index) => {return <Message message={m.message} key={index}/>})
    let newMessageText = state.messageText;
    

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onMessageUpdate = (e) => {
        let text = e.target.value;
        props.store.dispatch(messageUpdateActionCreator(text));
    };
  
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
                    <textarea onChange={onMessageUpdate} value={newMessageText} />
                </div>
                <div className={d.sendbutton}>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
