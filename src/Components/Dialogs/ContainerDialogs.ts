import {connect} from 'react-redux'
import {addMessageActionCreator, MessagesInitialState} from '../../Redux/MessagesReducer'
import {StoreType} from '../../Redux/ReduxStore'
import {Dialogs} from './Dialogs'
import {Dispatch} from 'redux'

type TypeMapStateToProps = {
    messages: MessagesInitialState
}

type TypeMapDispatchToProps = {
    addMessage: (text: string) => void
}

export type  TypePropsDialogs = TypeMapStateToProps & TypeMapDispatchToProps


const mapStateToProprs = (state: StoreType): TypeMapStateToProps => {
    return {
        messages: state.messages
    }
}

const mapDispatchToProps = (dispatch: Dispatch): TypeMapDispatchToProps => {
    return {
        addMessage: (text: string) => {
            dispatch(addMessageActionCreator(text))
        }
    }
}

export const ContainerDialogs = connect(mapStateToProprs, mapDispatchToProps)(Dialogs)