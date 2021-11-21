import {connect} from 'react-redux'
import {ActionMessagesType, addMessageActionCreator, MessagesInitialState} from '../../Redux/MessagesReducer'
import {StoreType} from '../../Redux/ReduxStore'
import {Dialogs} from './Dialogs'
import {Dispatch} from 'redux'

type TypeMapStateToProps = {
    messages: MessagesInitialState
    resultCode:number

}

type TypeMapDispatchToProps = {
    addMessageActionCreator: (text: string) => void
}

export type  TypePropsDialogs = TypeMapStateToProps & TypeMapDispatchToProps
// & ReturnType<typeof addMessageActionCreator>


const mapStateToProprs = (state: StoreType): TypeMapStateToProps => {
    return {
        messages: state.messages,
        resultCode:state.authMe.resultCode
    }
}


// const mapDispatchToProps = (dispatch: Dispatch): TypeMapDispatchToProps => {
//     return {
//         addMessage: (text: string) => {
//             dispatch(addMessageActionCreator(text))
//         }
//     }
// }

export const ContainerDialogs = connect(mapStateToProprs, {addMessageActionCreator})(Dialogs)