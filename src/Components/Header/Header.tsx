import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteAuthTC} from '../../Redux/AuthReducer'
import {StyleLogoOneImg, StyleLogoTwoImg} from '../../StyledComponents/Img/ImageStyle';
import {HeaderStyleLink, LogoTextH} from '../../StyledComponents/Text/TextH';
import {HeaderStyle} from '../../StyledComponents/Div'
import {LogoTextP} from '../../StyledComponents/Text/TextP';
import {LogoFlex} from '../../StyledComponents/Flex/Flex';
import {Footer} from '../Footer/Footer';
import {Link} from 'react-router-dom'
import {Nav} from '../Nav/Nav';
import samuraiLogoOne from '../../Images/samuraiLogoOne.png'
import samuraiLogoTwo from '../../Images/samuraiLogoTwo.png'

type TypeHeader = {
    resultCode: number
}

export const Header = ({resultCode}: TypeHeader) => {
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(deleteAuthTC())
    }
    return (
        <>
            <HeaderStyle>
                <LogoFlex>
                    <Link to="/" style={HeaderStyleLink}>
                        <StyleLogoOneImg alt="logoOne" src={samuraiLogoTwo}/>
                        <StyleLogoTwoImg alt="logoTwo" src={samuraiLogoOne}/>
                        <LogoTextH>SSN</LogoTextH>
                        <LogoTextP>SamuraiSocialNetwork</LogoTextP>
                    </Link>
                    <span onClick={logout} style={{
                        color: 'white',
                        position: 'relative',
                        left: '600px',
                        top: '-20px',
                        fontSize: '22px',
                        cursor: 'pointer'
                    }}>Logout</span>
                </LogoFlex>
            </HeaderStyle>
            <Nav/>
            <Footer/>
        </>
    )
}