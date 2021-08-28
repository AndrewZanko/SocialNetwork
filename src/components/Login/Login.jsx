import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import lo from './Login.module.css';
import * as Yup from 'yup';

const initialValues = {
    login: '',
    password: ''
};

const onSubmit = (values) => {
    console.log('Form data: '+ values.login); //call API here (watch ep. 5)
};

const validationSchema = Yup.object({
    login: Yup.string().required('Please enter the login'),
    password: Yup.string().required('Please enter the password')
});

const LoginForm = (props) => {

    return (
        <div className={lo.loginForm}>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form>
                    <div className={lo.formControl}>
                        <label htmlFor='login'>Login</label>
                        <Field type='text' id='login' name='login' />
                        <ErrorMessage name='login' />
                    </div>
                    <div className={lo.formControl}>
                        <label htmlFor='password'>Password</label>
                        <Field type='password' id='password' name='password' />
                        <ErrorMessage name='password' />
                    </div>
                    {/* <div>
                        <input type="checkbox" /> Remember me
                    </div> */}
                    <div>
                        <button type='submit'>Login</button>
                    </div>
                </Form>
            </Formik>          
        </div>      
    );
};

const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm />
        </div>
    );      
};

export default Login;