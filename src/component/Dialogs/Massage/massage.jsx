import dialog from '../dialogs.module.css';

const Massage = (props) => {
    return (
        <div className={dialog.item_massage}>
            {props.massage}
        </div>
    )
};

export default Massage;