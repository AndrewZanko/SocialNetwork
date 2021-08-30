import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import form from '../../common/Forms/Forms.module.css';


const initialValues = {
    post: ''
};

const validationSchema = Yup.object({
    post: Yup.string().required('The post can\'t be empty')
});

const MyPostsForm = (props) => {
    const onSubmit = (values) => {
        console.log('Post text: ' + values.post);
        props.addPost(values.post);
    };

    return (
        <div className={form.postForm}>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form>
                <div className={form.formControl}>
                        <Field type='text' id='post' name='post' as='textarea' placeholder='New post' />
                        <ErrorMessage name='post'>
                            {errorMsg => <div className={form.error}>{errorMsg}</div>}
                        </ErrorMessage>
                    </div>
                    <div>
                        <button type='submit'>Send post</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

const MyPosts = (props) => {

    let postsElements = props.posts.map( (po, index) => {return <Post message={po.message} likes={po.likesCount} key={index}/>});

    return ( 
        <div className={p.myPostsBlock}>
            <h3>My posts</h3>
            <MyPostsForm {...props} />
            <div className={p.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;