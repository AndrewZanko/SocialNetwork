import { connect } from 'react-redux';
import { compose } from 'redux';
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

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
