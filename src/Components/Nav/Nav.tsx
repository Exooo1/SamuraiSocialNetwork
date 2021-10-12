import React from 'react'
import {Route, Switch, NavLink, Redirect} from 'react-router-dom';
import {BodyStyle, NavStyle} from '../../StyledComponents/Div';
import {NavFlex} from '../../StyledComponents/Flex/Flex';
import {HeadGrid} from '../../StyledComponents/Grid/Grid';
import {MyPage} from '../Profile/MyPage/MyPage';
import {store} from '../../Redux/ReduxStore'
import {ContainerDialogs} from '../Dialogs/ContainerDialogs'
import { Users } from '../Users/Users';

const stores = store.getState()
console.log(stores)

export const Nav = () => {
    return (
        <HeadGrid>
            <NavStyle>
                <NavFlex>
                    <NavLink className="nav" to="/mypage">My Page</NavLink>
                    <NavLink className="nav" to="/message">Dialogs</NavLink>
                    <NavLink className="nav" to="/users">Users</NavLink>
                    <NavLink className="nav" to="/News">News</NavLink>
                    <NavLink className="nav" to="/Music">Music</NavLink>
                    <NavLink className="nav" to="/Settings">Settings</NavLink>
                </NavFlex>
            </NavStyle>
            <BodyStyle>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="mypage"/>}/>
                    <Route path="/mypage" render={() => <MyPage posts={stores.posts} dispatch={store.dispatch}/>}/>
                    <Route path="/message" render={() => <ContainerDialogs/>}/>
                    <Route path="/users" render={() => <Users/>}/>
                </Switch>
            </BodyStyle>
        </HeadGrid>
    )
}