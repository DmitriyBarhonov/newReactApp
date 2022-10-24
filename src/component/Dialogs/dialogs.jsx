import dialog from './dialogs.module.css';
import React from 'react';
import DialogItem from './DialogItem/dialogItem';
import Massage from './Massage/massage';
import { Formik, Form, Field, } from "formik";

const DialogForm = (props) => {
    return (
        <>
            <Formik  initialValues={{ newTextMassage: "" }} onSubmit={(values)=>{props.onSendClickMassage(values.newTextMassage)}}>
                <Form>
                    <div className={dialog}>
                        <div>
                            <Field name="newTextMassage" type="text" placeholder='Напиши что жизнь говно'/>
                        </div>
                        <div>
                            <button type="sumbit" >Отправить</button>
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

        <div className={dialog.dialogs}>
            <div className={dialog.dialogs_item}>
                {DialogsName}
            </div>

            <div className={dialog.massage}>
                {MassageText}
            </div>
            <DialogForm onSendClickMassage={onSendClickMassage}/>
        </div>
    )
};