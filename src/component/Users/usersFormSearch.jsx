import { Formik, Form, Field } from "formik";

export const FormSearch = (props) => {

    const submit = (values) => {
      props.onFilterChange(values)
    }
  
    return (
      <>
        <Formik initialValues={{ term: "", friend: `null`}} onSubmit={submit}>
          <Form>
            <div>
              <div>
                <Field name="term" type="text" placeholder='Поиск' />
              </div>
              <div>
                <Field name="friend" as="select">
                  <option value="null">All</option>
                  <option value="true">Only Followed</option>
                  <option value="false">Only unfollowed</option>
                </Field>
              </div>
              <div>
                <button type="submit">Login</button>
              </div>
            </div>
          </Form>
        </Formik>
      </>
    )
  }