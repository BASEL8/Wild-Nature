import React from 'react'
import styled from 'styled-components'
import { SearchAlt } from '@styled-icons/boxicons-regular'
import { Firefox } from '@styled-icons/boxicons-logos/Firefox'
export const Nav: React.FC<{}> = () => {
  return (
    <Body>
      <Logo><FireFoxIcon /></Logo>
      <Title><TitleLeft>WILD</TitleLeft>NATURE</Title>
      <Links>
        <ListItem>Species</ListItem>
        <ListItem>Location</ListItem>
        <ListItem>Lections</ListItem>
        <ListItem>Donate</ListItem>
        <ListItem><SearchIcon /></ListItem>
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
margin-top:20px;
`
const Title = styled.h4`
font-size:18px;
flex:3;
color:white;
cursor: pointer;
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
margin-right:50px;
`
const ListItem = styled.li`
color:white;
opacity:0.5;
margin : 0 10px;
font-size:12px;
cursor: pointer;
&:hover {
    opacity:0.9;
  }
`
const SearchIcon = styled(SearchAlt)`
  color: white;
  width:20px
`
const Logo = styled.div`
width:50px;
height:100%;
display:flex;
align-items:center;
justify-content:center;
margin-right:50px;
`
const FireFoxIcon = styled(Firefox)`
width:30px;
background:white;
color:#F39129;
border-radius:5px;
cursor: pointer;
`