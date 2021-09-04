import React from 'react'
import '../../index.css'
import {BodyStyle, NavStyle} from '../../StyledComponents/Div';
import {NavFlex} from '../../StyledComponents/Flex/Flex';
import {Route, Switch, NavLink} from 'react-router-dom';
import {Home} from '../Home';
import {HeadGrid} from '../../StyledComponents/Grid/Grid';
import {MyPage} from '../Profile/MyPage/MyPage';
import {Dialogs} from '../Dialogs/Dialogs';

export const Nav = () => {
    return (
        <HeadGrid>
            <NavStyle>
                <NavFlex>
                    <NavLink className="nav"  to="/mypage">My Page</NavLink>
                    <NavLink className="nav" to="/message">Dialogs</NavLink>
                    <NavLink className="nav" to="/News">News</NavLink>
                    <NavLink className="nav" to="/Music">Music</NavLink>
                    <NavLink className="nav" to="/Settings">Settings</NavLink>
                </NavFlex>
            </NavStyle>
            <BodyStyle>
                <Switch>
                    <Route exact path="/" render={() => <Home/>}/>
                    <Route path="/mypage" render={() => <MyPage/>}/>
                    <Route path="/message" render={() => <Dialogs/>}/>
                </Switch>
            </BodyStyle>
        </HeadGrid>
    )
}