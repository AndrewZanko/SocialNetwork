import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import form from '../common/Forms/Forms.module.css';
import * as Yup from 'yup';
import { login } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const initialValues = {
    email: '',
    password: ''
};

const validationSchema = Yup.object({
    email: Yup.string().required('Please enter the email'),
    password: Yup.string().required('Please enter the password')
});

const LoginForm = (props) => {

    const onSubmit = (values, {resetForm}) => {
        //console.log('Form data: '+ values.login); //call API here (watch ep. 5)
        props.loginOnSubmit(values.email, values.password, true);
        resetForm({values: ''});
    };

    return (
        <div className={form.loginForm}>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form>
                    <div className={form.formControl}>
                        <label htmlFor='email'>E-mail</label>
                        <Field type='email' id='email' name='email' />
                        <ErrorMessage name='email'>
                            {errorMsg => <div className={form.error}>{errorMsg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className={form.formControl}>
                        <label htmlFor='password'>Password</label>
                        <Field type='password' id='password' name='password' />
                        <ErrorMessage name='password'>
                            {errorMsg => <div className={form.error}>{errorMsg}</div>}
                        </ErrorMessage>
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
    const loginOnSubmit = (email, password, rememberMe) => {
        props.login(email, password, rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to='/profile' />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginForm loginOnSubmit={loginOnSubmit}/>
        </div>
    );      
};

const mapStatetoProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStatetoProps, {login})(Login);