import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import d from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((di, index) => { return <DialogItem name={di.name} id={di.id} ava={di.ava} key={index}/>});
    let messagesElements = props.state.messages.map((m, index) => {return <Message message={m.message} key={index}/>})

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}
                <div className={d.textarea}>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div className={d.sendbutton}>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
            <div className={d.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;
