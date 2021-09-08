import React from 'react'
import {StyleLogoOneImg, StyleLogoTwoImg} from '../../StyledComponents/Img/ImageStyle';
import {LogoTextH, HeaderStyleLink} from '../../StyledComponents/Text/TextH';
import {HeaderStyle} from '../../StyledComponents/Div'
import {LogoTextP} from '../../StyledComponents/Text/TextP';
import {LogoFlex} from '../../StyledComponents/Flex/Flex';
import {state} from '../../Redux/Redux'
import {Footer} from '../Footer/Footer';
import {Link} from 'react-router-dom'
import {Nav} from '../Nav/Nav';
import samuraiLogoOne from '../../Images/samuraiLogoOne.png'
import samuraiLogoTwo from '../../Images/samuraiLogoTwo.png'

const store = state

export const Header = () => {
    console.log(store)
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
                </LogoFlex>
            </HeaderStyle>
            <Nav store={store}/>
            <Footer/>
        </>
    )
}