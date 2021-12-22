import {connect} from 'react-redux'
import {ActionMessagesType, addMessageActionCreator, MessagesInitialState} from '../../Redux/MessagesReducer'
import {StoreType} from '../../Redux/ReduxStore'
import {Dialogs} from './Dialogs'
import {compose, Dispatch} from 'redux'
import {RedirectHOC} from '../HOC/RedirectHOC'

type TypeMapStateToProps = {
    messages: MessagesInitialState
    resultCode: number | null

}

type TypeMapDispatchToProps = {
    addMessageActionCreator: (text: string) => void
}

export type  TypePropsDialogs = TypeMapStateToProps & TypeMapDispatchToProps
// & ReturnType<typeof addMessageActionCreator>


const mapStateToProprs = (state: StoreType): TypeMapStateToProps => {
    return {
        messages: state.messages,
        resultCode: state.authMe.resultCode
    }
}


// const mapDispatchToProps = (dispatch: Dispatch): TypeMapDispatchToProps => {
//     return {
//         addMessage: (text: string) => {
//             dispatch(addMessageActionCreator(text))
//         }
//     }
// }


// const DialogsHOC = RedirectHOC(Dialogs)

// export const ContainerDialogs = connect(mapStateToProprs, {addMessageActionCreator})(DialogsHOC)

export default compose<React.ComponentType>(
    connect(mapStateToProprs, {addMessageActionCreator}),
    RedirectHOC
)(Dialogs)

