import React, {useEffect, useState} from 'react'
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
import axios from 'axios';

const store = state

export const Header = () => {
    const [date, setDate] = useState<any>()

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                console.log(res)
                setDate(res.data)
            })
        console.log(date)
    }, [])


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
            {date && date.map((item: any) => {
                return <p>{item.name}</p>
            })}
            <Footer/>
        </>
    )
}