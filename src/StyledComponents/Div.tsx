import styled from 'styled-components'

export const Div = styled.div`
  height: auto;
`

export const HeaderStyle = styled(Div)`
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: 1px 5px 20px red;
  background-color: #1d1515;
  height: 100px;
`

export const NavStyle = styled.nav`
  width: 350px;
  background-color: white;
  border-radius: 20px;
  grid-area: nav;
  height: 250px;
`

export const BodyStyle = styled.div`
  grid-area: body;
`
export const FooterStyle = styled(Div)`
  background-color: black;
  height: 100px;
`

export const MyPageAbout = styled.div`   
  font-size: 22px;
  border-bottom: solid 1.5px #adaaaa;
  color: black;
  text-align: center;
`

export const AboutForMe = styled(MyPageAbout)`
  color: #818C99;
  font-size: 18px;
`

export const PostStyle = styled.div`
  border: solid 1.5px #c3c0c0d1;
  margin: 2% 0;
  width: 700px;
  background-color: #FFFFFF;
  height: auto;
`

export const StyleMessageDescripDiv = styled(Div)`
  border-bottom: solid 1px #8080807d;
  margin-left: 30px;
  width: 550px;
`

