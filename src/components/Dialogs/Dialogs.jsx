import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import d from './Dialogs.module.css';
import Message from './Message/Message';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import form from '../common/Forms/Forms.module.css';

const initialValues = {
    message: ''
};

const validationSchema = Yup.object({
    message: Yup.string().required('The message can\'t be empty')
});

const DialogsForm = (props) => {

    const onSubmit = (values, {resetForm}) => {
        console.log('Message text: ' + values.message);
        props.addMessage(values.message);
        resetForm({values: ''});
    };    

    return (
        <div className={form.dialogForm}>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form>
                    <div className={form.formControl}>
                        <Field type='text' id='message' name='message' as='textarea' placeholder='New message' className={d.textarea} />
                        <ErrorMessage name='message'>
                            {errorMsg => <div className={form.error}>{errorMsg}</div>}
                        </ErrorMessage>
                    </div>
                    <div>
                        <button type='submit' className={d.sendMessage}>Send message</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((di, index) => { return <DialogItem name={di.name} id={di.id} ava={di.ava} key={index}/>});
    let messagesElements = props.dialogsPage.messages.map((m, index) => {return <Message message={m.message} key={index}/>});  
  
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                <div className={d.messageItems}>
                    {messagesElements}
                </div>               
                <DialogsForm {...props}/>
            </div>
        </div>
    );
};

export default Dialogs;
