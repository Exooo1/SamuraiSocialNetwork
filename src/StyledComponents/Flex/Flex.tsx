import styled from 'styled-components'

export const SimpleFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavFlex = styled(SimpleFlex)`
  margin: 20px 0;
  flex-direction: column;
`
export const LogoFlex = styled(SimpleFlex)`
  justify-content: flex-start;
`
export const MyPageFlex = styled(SimpleFlex)`
  width: 700px;
  flex-direction: column;
  font-weight: 500;
  border: solid 1.5px #8080808a;
  border-radius: 20px 20px 0 0;
  background-color: white;
`

export const MyPostsFlex = styled(SimpleFlex)`
  width: 700px;
  flex-direction: column;
  margin-top: 2%;
`
export const DialogStyle = styled(SimpleFlex)`
  width: 700px;
  flex-direction: column;
  border-radius: 10px;
  border: solid 1.5px #8080808a;
  background-color: white;
`

export const MessagesStyle = styled(SimpleFlex)`
  &:hover{
    width: 680px;
    border-radius: 40px;
    transition: 0.5s;
    transform: scale(1.02);
    background-color: #f3ecec;
  }
  width: 700px;
`
