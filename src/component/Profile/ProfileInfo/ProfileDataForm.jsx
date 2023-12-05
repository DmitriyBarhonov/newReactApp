import { Formik, Form, Field } from "formik";
import s from "./ProfileInfo.module.css";

export const ProfileDataForm = (props) => {
  let profile = props.profile;

  return (
    <>
      <Formik
        initialValues={{
          aboutMe: profile.aboutMe,
          contacts: {
            facebook: profile.contacts.facebook,
            vk: profile.contacts.vk,
            twitter: profile.contacts.twitter,
            instagram: profile.contacts.instagram,
            website: profile.contacts.website,
            youtube: profile.contacts.youtube,
            github: profile.contacts.github,
            mainLink: profile.contacts.mainLink,
          },
          lookingForAJob: profile.lookingForAJob,
          lookingForAJobDescription: profile.lookingForAJobDescription,
          fullName: profile.fullName,
        }}
        onSubmit={(values) => {
          props.onSumbitInfoMethod(values);
        }}
      >
        <Form>
          <div>
            <div>
              <button className={s.button} type="sumbit">
                Save
              </button>
            </div>

            <div className={s.checkbox}>
              <Field name="lookingForAJob" type="checkbox" />
              <label>Looking for a job</label>
            </div>

            <div className={s.form}>
              <Field
                name="lookingForAJobDescription"
                type="text"
                placeholder="lookingForAJobDescription"
              />
            </div>

            <div className={s.form}>
              <Field name="fullName" type="text" placeholder="fullName" />
            </div>

            <div className={s.form}>
              <Field name="aboutMe" type="text" placeholder="aboutMe" />
            </div>
          </div>

          <div>
            <div className={s.form}>
              <Field
                name="contacts.facebook"
                type="text"
                placeholder="facebook"
              />
            </div>
            <div className={s.form}>
              <Field name="contacts.vk" type="text" placeholder="vk" />
            </div>

            <div className={s.form}>
              <Field
                name="contacts.twitter"
                type="text"
                placeholder="twitter"
              />
            </div>

            <div className={s.form}>
              <Field
                name="contacts.instagram"
                type="text"
                placeholder="instagram"
              />
            </div>

            <div className={s.form}>
              <Field
                name="contacts.website"
                type="text"
                placeholder="website"
              />
            </div>

            <div className={s.form}>
              <Field
                name="contacts.youtube"
                type="text"
                placeholder="youtube"
              />
            </div>

            <div className={s.form}>
              <Field name="contacts.github" type="text" placeholder="github" />
            </div>

            <div className={s.form}>
              <Field
                name="contacts.mainLink"
                type="text"
                placeholder="mainLink"
              />
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};
