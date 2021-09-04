import React from 'react'
import {HeaderStyle} from '../../StyledComponents/Div'
import {LogoTextH, HeaderStyleLink} from '../../StyledComponents/Text/TextH';
import {LogoTextP} from '../../StyledComponents/Text/TextP';
import {Link} from 'react-router-dom'
import {Footer} from '../Footer/Footer';
import {Nav} from '../Nav/Nav';
import {LogoFlex} from '../../StyledComponents/Flex/Flex';
import samuraiLogoOne from '../../Images/samuraiLogoOne.png'
import samuraiLogoTwo from '../../Images/samuraiLogoTwo.png'

export const Header = () => {
    return (
        <>
            <HeaderStyle>
                <LogoFlex>
                    <Link to="/" style={HeaderStyleLink}>
                        <img alt="logoOne" style={{
                            width: '90px',
                            position: 'absolute',
                            left: '90px',
                        }}
                             src={samuraiLogoTwo}/>
                        <img alt="logoTwo" style={{
                            width: '90px',
                            position: 'absolute',
                            left: '330px',
                        }}
                             src={samuraiLogoOne}/>
                        <LogoTextH>SSN</LogoTextH>
                        <LogoTextP>SamuraiSocialNetwork</LogoTextP>
                    </Link>
                </LogoFlex>
            </HeaderStyle>
            <Nav/>
            <Footer/>
        </>
    )
}