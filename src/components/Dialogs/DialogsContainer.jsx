import { connect } from 'react-redux';
import { addMessageActionCreator, messageUpdateActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

// const DialogsContainer = (props) => {
 
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState().dialogsPage;
    
//                 let addMessage = () => {
//                     store.dispatch(addMessageActionCreator());
//                 };
            
//                 let onMessageUpdate = (text) => {
//                     store.dispatch(messageUpdateActionCreator(text));
//                 };

//                 return <Dialogs addMessage={addMessage} updateMessage={onMessageUpdate} dialogsPage={state}/>
//             }}
//         </StoreContext.Consumer>   
//     );
// };

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        updateMessage: (text) => {
            dispatch(messageUpdateActionCreator(text));
        }
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
