import React from 'react'
import {TypesMessagesArray} from '../../InterfaceTypes/InterfaceTypes'
import {Route, Switch, NavLink} from 'react-router-dom';
import {BodyStyle, NavStyle} from '../../StyledComponents/Div';
import {NavFlex} from '../../StyledComponents/Flex/Flex';
import {HeadGrid} from '../../StyledComponents/Grid/Grid';
import {Home} from '../Home';
import {MyPage} from '../Profile/MyPage/MyPage';
import {Dialogs} from '../Dialogs/Dialogs';
import '../../index.css'

export const Nav: React.FC<TypesMessagesArray> = ({store}) => {
    console.log(store)
    return (
        <HeadGrid>
            <NavStyle>
                <NavFlex>
                    <NavLink className="nav" to="/mypage">My Page</NavLink>
                    <NavLink className="nav" to="/message">Dialogs</NavLink>
                    <NavLink className="nav" to="/News">News</NavLink>
                    <NavLink className="nav" to="/Music">Music</NavLink>
                    <NavLink className="nav" to="/Settings">Settings</NavLink>
                </NavFlex>
            </NavStyle>
            <BodyStyle>
                <Switch>
                    <Route exact path="/" render={() => <Home/>}/>
                    <Route path="/mypage" render={() => <MyPage storePosts={store.posts}/>}/>
                    <Route path="/message" render={() => <Dialogs store={store}/>}/>
                </Switch>
            </BodyStyle>
        </HeadGrid>
    )
}