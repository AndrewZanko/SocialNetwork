import { useFormik } from 'formik';
import React from 'react';
import lo from './Login.module.css';

const initialValues = {
    login: '',
    password: ''
};

const onSubmit = (values) => {
    console.log('Form data: '+ values.login); //call API here (watch ep. 5)
};

const validate = (values) => {
    let errors = {};
    if (!values.login) {
        errors.login = 'Please enter the login';
    };
    if (!values.password) {
        errors.password = 'Please enter the password';
    };
    return errors;
}

const LoginForm = (props) => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });
    //console.log(formik.errors);
    return (
        <div className={lo.loginForm}>
            <form onSubmit={formik.handleSubmit}>
                <div className={lo.formControl}>
                    <label htmlFor='login'>Login</label>
                    <input type='text' id='login' name='login' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.login} />
                    {formik.touched.login && formik.errors.login ? (<div className={lo.error}>{formik.errors.login}</div>) : null}
                </div>
                <div className={lo.formControl}>
                    <label htmlFor='password'>E-mail</label>
                    <input type='text' id='password' name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                    {formik.touched.password && formik.errors.password ? (<div className={lo.error}>{formik.errors.password}</div>) : null}
                </div>
                {/* <div>
                    <input type="checkbox" /> Remember me
                </div> */}
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
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