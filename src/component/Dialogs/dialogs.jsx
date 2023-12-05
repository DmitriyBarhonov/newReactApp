import s from './dialogs.module.css';
import React from 'react';
import DialogItem from './DialogItem/dialogItem';
import Massage from './Massage/massage';
import { Formik, Form, Field, } from "formik";
import { Button } from 'antd';

const DialogForm = (props) => {
    return (
        <>
            <Formik  initialValues={{ newTextMassage: "" }} onSubmit={(values)=>{props.onSendClickMassage(values.newTextMassage)}}>
                <Form>
                    <div className={s}>
                        <div className={s.form}>
                            <Field name="newTextMassage" type="text" placeholder='Your text'/>
                        </div>
                        <div>
                            <Button type="primary">Send</Button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export const Dialogs = (props) => {

    let DialogsName = props.dialogsName.map(d => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img} />);

    let MassageText = props.massageText.map(m => <Massage massage={m.massage} key={m.id} id={m.id} />);

    let onSendClickMassage = (newTetxMassage) => {
        props.onSendClickMassage(newTetxMassage)
    }

    return (

        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {DialogsName}
            </div>

            <div className={s.massage}>
                {MassageText}
            </div>
            <DialogForm onSendClickMassage={onSendClickMassage}/>
        </div>
    )
};