import React from 'react';
import { addMessageActionCreator, messageUpdateActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;
    
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onMessageUpdate = (text) => {
        props.store.dispatch(messageUpdateActionCreator(text));
    };
  
    return (<Dialogs addMessage={addMessage} updateMessage={onMessageUpdate} dialogsPage={state}/>);
};

export default DialogsContainer;
