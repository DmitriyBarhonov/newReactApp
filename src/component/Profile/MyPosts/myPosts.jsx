import React from 'react';
import clases from './myPosts.module.css';
import { Post } from './Post/post';
import { Formik, Form, Field, } from "formik";
// import * as Yup from "yup";

const NewPostForm = (props) => {
    return (
        <>
            <Formik initialValues={{ newTextPost: "" }} onSubmit={(values) => { props.addOnPost(values.newTextPost) }}>
                <Form >
                    <div className={clases.form_newPost}>
                        <Field name="newTextPost" type="textaria" placeholder="Что случилось" />
                    </div>
                    <div>
                        <button type='submit'>Add Post</button>
                    </div>

                </Form>
            </Formik>
        </>

    )
}


export const MyPosts = (props) => {

    let ElemetPost = props.postText.map(elem => <Post text={elem.massage} key={elem.id} id={elem.id} />);

    const addOnPost = (newText) => {
        props.addPost(newText);
    };

    return (
        <div className={clases.post}>

            <h2>My post</h2>
            <NewPostForm addOnPost={addOnPost}/>

            <div className={clases.new_post}>
                New post
            </div>

            <div className={clases.post_list}>
                {ElemetPost.reverse()}
            </div>
        </div>
    )


};
