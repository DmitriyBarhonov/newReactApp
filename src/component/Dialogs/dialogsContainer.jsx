import { connect } from 'react-redux';
import { sendMassageCreator } from '../../redux/dialigsReducer';
import { Dialogs } from './dialogs';
import {withAuthRedirect} from "./../Hoc/AuthRedirect"
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        dialogsName: state.dialogPage.userData,
        massageText: state.dialogPage.massageData,
    }
}


let mapDispatchToProps = (dispatch) => {
    return {

        onSendClickMassage: (newTextMassage) => {
            dispatch(sendMassageCreator(newTextMassage))
        }
    }
}


// let AuthRedirectComponent = withAuthRedirect(Dialogs)

 const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

export default DialogsContainer;