import React from 'react'
import styled from 'styled-components'
export const Nav: React.FC<{}> = () => {
  return (
    <Body>
      <Logo>Logo</Logo>
      <Title><TitleLeft>WILD</TitleLeft>NATURE</Title>
      <Links>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </Links>
    </Body>
  )
}

const Body = styled.div`
display : flex;
align-items : center;
justify-content:space-between;
z-index:99;
position:absolute;
left:0px;
right:0;
`
const Title = styled.h4`
font-weight: 700;
font-size:30px;
flex:3;
`
const TitleLeft = styled.span`
color:#F3912A;
`
const Links = styled.ul`
list-style:none;
display : flex;
align-items : center;
justify-content:space-around;
flex:1;
`
const Logo = styled.div`
width:50px;
background:black;
color:white;
height:100%;
display:flex;
align-items:center;
justify-content:center;
margin-right:50px;
`