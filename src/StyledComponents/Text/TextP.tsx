import styled from 'styled-components'

export const SimpleTextP = styled.p`
 color:black;
`
export const LogoTextP = styled(SimpleTextP)`
  font-family: "Corbel Light";
  color: white;
  font-size: 20px;
  font-weight: 600;
  padding-left: 6.5%;
  position: relative;
  left: 144px;
  top: -75px;
`
export const StyleMessageTimeP = styled(SimpleTextP)`
  padding-left:500px;
  margin: 20px 0;
  color:#00000069;
  font-weight:600;
  text-decoration: underline;
`
export const StyleMessagesTextP = styled(SimpleTextP)`
  line-height:20px;
  text-indent:10px;
  color: #626D7A;
`

