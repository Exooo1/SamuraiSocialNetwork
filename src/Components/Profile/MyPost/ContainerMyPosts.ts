import {Dispatch} from 'redux'
import {connect} from 'react-redux'
import {StoreType} from '../../../Redux/ReduxStore'
import {PostIinitialTypes} from '../../../Redux/PostReducer'
import {MyPosts} from './MyPosts'


type TypeMapStateToProps = {
    post: PostIinitialTypes
}
type TypeDispatchToProps = {}

export type TypePropsMyPost = TypeMapStateToProps & TypeDispatchToProps

const mapStateToProps = (state: StoreType): TypeMapStateToProps => {
    return {
        post: state.posts
    }
}
const mapDispatchToProps = (dispacth: Dispatch): TypeDispatchToProps => {
    return {}
}

export const ContainerMyPosts = connect(mapStateToProps, mapDispatchToProps)(MyPosts)