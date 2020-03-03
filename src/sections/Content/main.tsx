import React from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ContentData } from './ContentData'
type DataType = {
  title: string;
  subTitle: string;
  videoLink: string;
  image: string;
  text: string
}

export const Content = ({ data }: { data: DataType[] }) => {
  return (
    <Body>
      <CustomTabs>
        <CustomTabList>
          {data.map((d, i) => <CustomTab key={i}><Dot /></CustomTab>)}
        </CustomTabList>
        {data.map((d, i) => <CustomTabPanel key={i}><ContentData data={d} /></CustomTabPanel>)}
      </CustomTabs>
    </Body>
  )
}
const Body = styled.div`
height:100%;
background:red;
position:absolute;
top:0;
left:0;
right:0;
z-index:1;
`
const CustomTabs = styled(Tabs)`
display:flex;
background:yellow;
height:100%;
`
const CustomTabList = styled(TabList)`
height:100%;
background:blue;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
position:relative;
width:50px;
list-style:none
`
const CustomTab = styled(Tab)`
border: 1px solid white;
padding:5px;
border-radius:50%;
margin-bottom:5px;
`
const Dot = styled.div`
height:5px;
width:5px;
background:white;
border-radius:50%;
`
const CustomTabPanel = styled(TabPanel)`
background:green;
flex: ${({ selected }) => selected ? 1 : 0};
display:flex;
align-items:center;
justify-content:center;
`
