import { Formik, Form, Field } from "formik";

export const ProfileDataForm = () => {
    return (
        <>
            <Formik initialValues={{
                facebook: "",
                website: "",
                vk: "",
                twitter: "",
                instagram: "",
                youtube: "",
                github: "",
                mainLink: "",
                work: false
            }} onSubmit={(values) => {
                let { facebook, website, vk, twitter, instagram,  youtube, github, mainLink, work,}  = values
                console.log(facebook, website, vk, twitter, instagram,  youtube, github, mainLink, work,)
            }}>
                <Form>
                    <div>

                        <div >
                            <button type="sumbit">Сохранить</button>
                        </div>

                        <div>
                            <Field name="work" type="checkbox" />
                            <label>Ищу работу</label>
                        </div>

                        <div>
                            <Field name="facebook" type="text" placeholder='facebook' />
                        </div>
                        <div>
                            <Field name="website" type="text" placeholder='website' />
                        </div>

                        <div>
                            <Field name="vk" type="text" placeholder='vk' />
                        </div>

                        <div>
                            <Field name="twitter" type="text" placeholder='twitter' />
                        </div>

                        <div>
                            <Field name="instagram" type="text" placeholder='instagram' />
                        </div>

                        <div>
                            <Field name="youtube" type="text" placeholder='youtube' />
                        </div>

                        <div>
                            <Field name="github" type="text" placeholder='github' />
                        </div>

                        <div>
                            <Field name="mainLink" type="text" placeholder='mainLink' />
                        </div>

                    </div>
                </Form>
            </Formik>
        </>
    )
}