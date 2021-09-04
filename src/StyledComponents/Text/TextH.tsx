import styled from 'styled-components'
import CSS from 'csstype';

export const HeaderStyleLink: CSS.Properties = {
    textDecoration: 'none',
}
export const SimpleTextH = styled.h1`
  color: black
`

export const StyleDialogsMessages = styled(SimpleTextH)`
  margin-top: 20px;
  font-size: 20px;
`
export const LogoTextH = styled(SimpleTextH)`
  font-family: "Arial Black";
  letter-spacing: 3px;
  color: #ff1100;
  position: relative;
  top: -30px;
  left: 170px;
  font-weight: 900;
  font-size: 50px;
  text-shadow: 3px -2px 1px white;
  margin-left: 9%;
`
export const StyleDialogsMessagesNameH = styled(SimpleTextH)`
  font-size: 16px;
  height: 4px;
  text-indent: 20px;
  color: black;
`
