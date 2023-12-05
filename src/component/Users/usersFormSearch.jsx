import { Formik, Form, Field } from "formik";
import s from "./user.module.css";

export const FormSearch = (props) => {
  const submit = (values) => {
    props.onFilterChange(values);
  };

  return (
    <>
      <Formik initialValues={{ term: "", friend: `null` }} onSubmit={submit}>
        <Form>
          <div>
            <div>
              <Field className={s.form} name="term" type="text" placeholder="Search" />
            </div>
            <div>
              <Field className={s.select} name="friend" as="select">
                <option value="null">All</option>
                <option value="true">Only Followed</option>
                <option value="false">Only unfollowed</option>
              </Field>
            </div>
            <div>
              <button className={s.button} type="submit">Search</button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};
