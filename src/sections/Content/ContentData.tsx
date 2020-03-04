import React from 'react'
import styled from 'styled-components';
import { PlayCircle } from '@styled-icons/boxicons-regular/PlayCircle'
import { UsaMap } from './components'
type conservationType = {
  code: string,
  status: boolean;
}
type DataType = {
  title: string;
  subTitle: string;
  videoLink: string;
  image: string;
  text: string;
  states: string[],
  conservationStatus: conservationType[],
  trinomialName: string
}
export const ContentData = ({ data }: { data: DataType }) => {
  const { title, subTitle, image, text, states, conservationStatus, trinomialName } = data;
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
        <Map>
          <h6>Territory of habitat</h6>
          <UsaMap states={states} />
        </Map>
        <Info>
          <div>
            <h6>Trinomial Name</h6>
            <p>{trinomialName}</p>
          </div>
          <div>
            <h6>conservation Status</h6>
            <StatusHolder>
              {conservationStatus.map(({ code, status }, i) => <StatusDiv theme={{ status }} key={i}>{code}</StatusDiv>)}
            </StatusHolder>
          </div>
        </Info>
        <Images></Images>
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
z-index:5;
color:white;
min-height:200px;
margin-top:30px;
display:flex;
align-items:center;
justify-content:center;
flex-wrap:wrap;
width:100%;
& > div{
  height:100%;
}
`
const Map = styled.div`
flex:2;
display:flex;
align-items:center;
justify-content:space-between;
flex-direction:column;
& h6 {
  color:#F39129
}
`
const Info = styled.div`
flex:2;
display:flex;
align-items:center;
justify-content:space-between;
flex-wrap:wrap;
flex-direction:column;
margin-left:10px;
& > div {
  margin-bottom:15px;
  width:100%;
  flex:1;
  & h6 {
  color:#F39129;
  margin-bottom:15px;
}
}
`
const StatusHolder = styled.div`
display : flex;
flex:1
`
const StatusDiv = styled.div`
margin-right :5px;
padding:5px;
border : 1px solid ${({ theme: { status } }) => status ? 'orange' : 'white'};
width:15px;
height:15px;
border-radius:50%;
font-size:10px;
display:flex;
align-items:center;
justify-content:center;
text-transform:uppercase;
background-color:${({ theme: { status } }) => status ? 'orange' : 'transparent'}
`
const Images = styled.div`
flex:4;
display:flex;
align-items:center;
justify-content:flex-end;
flex-wrap:wrap;
` 