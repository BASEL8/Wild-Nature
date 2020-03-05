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
    videoLink: 'https://youtu.be/RCqQYpM1hCA',
    states: ['wa', 'mt', 'id', 'or'],
    conservationStatus: [{ code: 'ex', status: false }, { code: 'we', status: false }, { code: 'cr', status: false }, { code: 'ev', status: false }, { code: 'vw', status: false }, { code: 'nt', status: false }, { code: 'lc', status: true }],
    trinomialName: 'Vulpes vulpes',
    information: {
      homePage: [
        {
          src: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80',
          type: 'image'
        },
        {
          src: 'https://images.unsplash.com/photo-1462953491269-9aff00919695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
          type: 'image'
        },
        {
          src: 'https://www.youtube.com/embed/D2SoGHFM18I',
          type: 'video'
        }
      ]
    }
  },
  {
    title: 'White-tailed deer',
    subTitle: 'Species of america',
    text: 'The white-tailed deer (Odocoileus virginianus), also known as the whitetail or Virginia deer, is a medium-sized deer native to North America, Central America, Ecuador',
    image: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80',
    videoLink: 'https://www.youtube.com/watch?v=F8eCgl6JG7k',
    states: ['wa', 'mt', 'sd', 'nd'],
    conservationStatus: [{ code: 'ex', status: false }, { code: 'we', status: false }, { code: 'cr', status: false }, { code: 'ev', status: false }, { code: 'vw', status: false }, { code: 'nt', status: true }, { code: 'lc', status: true }],
    trinomialName: 'Odocoileus virginianus',
    information: {
      homePage: [
        {
          src: 'https://images.unsplash.com/photo-1504904970674-4f7bd7413cf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
          type: 'image'
        },
        {
          src: 'https://images.unsplash.com/photo-1480386154506-eadc6f23172a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          type: 'image'
        },
        {
          src: 'https://www.youtube.com/embed/F8eCgl6JG7k',
          type: 'video'
        },
        {
          src: 'White-tailed deer, the smallest members of the North American deer family, are found from southern Canada to South America. In the heat of summer they typically inhabit fields and meadows using clumps of broad-leaved and coniferous forests for shade. During the winter they generally keep to forests, preferring coniferous stands that provide shelter from the harsh elements.',
          type: 'text'
        }
      ]
    },
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