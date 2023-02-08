import { Formik, Form, Field } from "formik";

export const ProfileDataForm = (props) => {

    let profile = props.profile

    return (
        <>

            <Formik initialValues={{
                aboutMe: profile.aboutMe,
                contacts:{
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

            }} onSubmit={(values) => {
                props.onSumbitInfoMethod(values)
            }}>
                <Form>
                    <div>

                        <div >
                            <button type="sumbit">Сохранить</button>
                        </div>

                        <div>
                            <Field name="lookingForAJob" type="checkbox" />
                            <label>Ищу работу</label>
                        </div>

                        <div>
                            <Field name="lookingForAJobDescription" type="text" placeholder='lookingForAJobDescription' />
                        </div>

                        <div>
                            <Field name="fullName" type="text" placeholder='fullName' />
                        </div>

                        <div>
                            <Field name="aboutMe" type="text" placeholder='aboutMe' />
                        </div>

                    </div>


                    <div>

                        {/* <div >
                            <button type="sumbit">Сохранить</button>
                        </div>

                        <div>
                            <Field name="work" type="checkbox" />
                            <label>Ищу работу</label>
                        </div> */}

                        <div>
                            <Field name="contacts.facebook" type="text" placeholder='facebook' />
                        </div>
                        <div>
                            <Field name="contacts.vk" type="text" placeholder='vk' />
                        </div>

                        <div>
                            <Field name="contacts.twitter" type="text" placeholder='twitter' />
                        </div>

                        <div>
                            <Field name="contacts.instagram" type="text" placeholder='instagram' />
                        </div>

                        <div>
                            <Field name="contacts.website" type="text" placeholder='website' />
                        </div>

                        <div>
                            <Field name="contacts.youtube" type="text" placeholder='youtube' />
                        </div>

                        <div>
                            <Field name="contacts.github" type="text" placeholder='github' />
                        </div>

                        <div>
                            <Field name="contacts.mainLink" type="text" placeholder='mainLink' />
                        </div>

                    </div>

                </Form>
            </Formik>



            {/* <div>
                <Formik initialValues={{
                    
                }} onSubmit={(values) => {
                    props.onSumbitInfoMethod(values)
                }}>
                    <Form>

                    </Form>
                </Formik>
            </div> */}

        </>
    )
}