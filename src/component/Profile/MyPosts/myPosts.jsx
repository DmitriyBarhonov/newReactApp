import React from "react";
import { Post } from "./Post/post.tsx";
import { Formik, Form, Field } from "formik";
import s from "./myPosts.module.css";

const NewPostForm = (props) => {
  return (
    <>
      <Formik
        initialValues={{ newTextPost: "" }}
        onSubmit={(values) => {
          props.addOnPost(values.newTextPost);
        }}
      >
        <Form>
          <div className={s.form_newPost}>
            <Field
              name="newTextPost"
              type="textaria"
              placeholder="What's happened"
            />
          </div>
          <div>
            <button className={s.buttonPost} type="submit">
              Add Post
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export const MyPosts = (props) => {
  let ElemetPost = props.postText.map((elem) => (
    <Post text={elem.massage} key={elem.id} id={elem.id} />
  ));

  const addOnPost = (newText) => {
    props.addPost(newText);
  };

  return (
    <div className={s.post}>
      <h2>My post</h2>
      <NewPostForm addOnPost={addOnPost} />

      <div className={s.new_post}>New post</div>

      <div className={s.post_list}>{ElemetPost.reverse()}</div>
    </div>
  );
};
