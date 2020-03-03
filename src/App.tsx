import React from 'react';
import './App.css';
import { Nav, Content } from './sections'
import styled from 'styled-components';
const data = [
  {
    title: 'test title',
    subTitle: 'sub title',
    text: 'text',
    image: 'https://images.unsplash.com/photo-1540153448870-af780343526e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    videoLink: 'https://youtu.be/RCqQYpM1hCA'
  },
  {
    title: 'test title',
    subTitle: 'sub title',
    text: 'text',
    image: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80',
    videoLink: 'https://youtu.be/RCqQYpM1hCA'
  }
]
function App() {
  return (
    <Body>
      <Content data={data} />
      <Nav />
    </Body>
  );
}

export default App;

const Body = styled.div`
height:100vh;
position:relative;
`