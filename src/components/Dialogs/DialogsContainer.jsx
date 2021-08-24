import { connect } from 'react-redux';
import { addMessageActionCreator, messageUpdateActionCreator } from '../../redux/dialogsReducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
