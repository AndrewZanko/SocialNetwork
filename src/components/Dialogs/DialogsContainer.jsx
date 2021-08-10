import React from 'react';
import { addMessageActionCreator, messageUpdateActionCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
 
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage;
    
                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                };
            
                let onMessageUpdate = (text) => {
                    store.dispatch(messageUpdateActionCreator(text));
                };

                return <Dialogs addMessage={addMessage} updateMessage={onMessageUpdate} dialogsPage={state}/>
            }}
        </StoreContext.Consumer>   
    );
};

export default DialogsContainer;
