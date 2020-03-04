import React from 'react'
import styled from 'styled-components';

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

    </Body>
  )
}
const Body = styled.div`
height:100%;
width:100%;
filter: brightness(0.55);
background-image:url(${({ theme }) => theme});
background-repeat:no-repeat;
background-position:center;
background-size:cover;
`