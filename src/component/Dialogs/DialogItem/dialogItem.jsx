import dialog from '../dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {

    return (
        <div className={dialog.item}>
            <NavLink to={`/dialogs/${props.id}`} className={set => set.isActive ? dialog.active : dialog.item}>
                <div className={dialog.dialogI}>
                    <img alt="dialogImg" src={props.img} />
                    {props.name}
                </div>
            </NavLink>
        </div>
    )
}

export default DialogItem;