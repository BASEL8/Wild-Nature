import React from 'react';
import './App.css';
import { Nav, Content } from './sections'
import styled from 'styled-components';
const data = [
  {
    title: 'American fox',
    subTitle: 'Species of america',
    text: 'The American red fox , commonly known as the eastern American red fox, is a North American subspecies of the red fox (Vulpes vulpes). Historically, red foxes were classified as two species: Vulpes vulpes in Eurasia and Vulpes fulva in the Americas (Tesky, 1995).',
    image: 'https://images.unsplash.com/photo-1540153448870-af780343526e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    videoLink: 'https://youtu.be/RCqQYpM1hCA'
  },
  {
    title: 'White-tailed deer',
    subTitle: 'Species of america',
    text: 'The white-tailed deer (Odocoileus virginianus), also known as the whitetail or Virginia deer, is a medium-sized deer native to North America, Central America, Ecuador',
    image: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80',
    videoLink: 'https://www.youtube.com/watch?v=F8eCgl6JG7k'
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