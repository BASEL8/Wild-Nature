import React from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ContentData } from './ContentData'
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
  states: string[];
  conservationStatus: conservationType[],
  trinomialName: string

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
position:absolute;
top:0;
left:0;
right:0;
z-index:1;
`
const CustomTabs = styled(Tabs)`
display:flex;
height:100%;
`
const CustomTabList = styled(TabList)`
height:100%;
background:#F39129;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
position:relative;
width:50px;
list-style:none
`
const CustomTab = styled(Tab)`
padding:5px;
border-radius:50%;
margin-bottom:5px;
opacity: ${({ selected }) => selected ? 1 : 0.5};

`
const Dot = styled.div`
height:10px;
width:10px;
background:white;
border-radius:50%;
cursor: pointer;
`
const CustomTabPanel = styled(TabPanel)`
flex: ${({ selected }) => selected ? 1 : 0};
display:flex;
align-items:center;
justify-content:center;
`
