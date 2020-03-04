import React from 'react'
import styled from 'styled-components';
import { PlayCircle } from '@styled-icons/boxicons-regular/PlayCircle'

type DataType = {
  title: string;
  subTitle: string;
  videoLink: string;
  image: string;
  text: string
}
export const ContentData = ({ data }: { data: DataType }) => {
  const { title, subTitle, videoLink, image, text } = data;
  console.log(data)
  return (
    <Body theme={image}>
      <Top>
        <SubTitle>
          {subTitle}
        </SubTitle>
        <Title>
          {title}
        </Title>
        <Text>
          {text}
        </Text>
        <More>
          <MoreVideo>
            <PlayVideoIcon />
            Watch Video
          </MoreVideo>
          <MoreInfo>
            More Info
          </MoreInfo>
        </More>
      </Top>
      <Bottom>
        bottom
      </Bottom>
    </Body>
  )
}
const Body = styled.div`
height:100%;
width:100%;
background-image: url(${({ theme }) => theme});
background-repeat:no-repeat;
background-position:center;
background-size:cover;
display:flex;
align-items:flex-start;
justify-content:flex-end;
flex-direction:column;
position:relative;
&::after{
  content:'';
  position:absolute;
  top:0;
  left:0;
  display:block;
  width:100%;
  height:100%;
  background-color:black;
  opacity:0.5;
  z-index:3
}
`
const Top = styled.div`
z-index:5;
color:white;
padding:20px;
text-transform: uppercase;
width:30%;
@media(max-width: 767px){
    width:100%;
  }
`
const Title = styled.h1`
margin: 15px 0;

`
const SubTitle = styled.div`

`
const Text = styled.div`
text-transform: none;
`
const More = styled.div`
margin-top:15px;
display:flex;
align-items:center;
justify-content:space-between;
text-transform:none;
font-size:12px;
`
const MoreVideo = styled.div`
display:flex;
align-items:center;
justify-content:center;
`
const PlayVideoIcon = styled(PlayCircle)`
background-color:#F39129;
color:white;
border-radius:50%;
width:30px;
padding:0;
margin-right:20px;
&:last-child :first-child{
  fill:#F39129;
};
&:last-child :last-child{
  width:30px;
}
`
const MoreInfo = styled.div``
const Bottom = styled.div`

`