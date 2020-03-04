import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';

export const ImagesSlider: React.FC<{}> = () => {
  return (
    <CustomCarousel
      showThumbs={false}
      showStatus={false}
      useKeyboardArrows
      className="presentation-mode"
      infiniteLoop={true}
      showIndicators={false}
      width="300px"
    >
      <div className="my-slide primary">
        <h1>
          Presentation mode
</h1>
      </div>
      <div className="my-slide secondary">
        <h2>
          It's just a couple of new styles...
</h2>
      </div>
      <div className="my-slide content">
        <p>
          ...and the carousel can be used to present something!
</p>
      </div>
      <div className="my-slide content">
        <img src="/assets/meme.png" />
      </div>
      <div className="my-slide content">
        <p>
          See the
<a href="./examples/presentation/presentation.scss">
            source code
</a>
          ...
</p>
      </div>
      <div className="my-slide secondary complex">
        <h2>
          It supports:
</h2>
        <ul>
          <li>
            Headers (h1 - h6)
</li>
          <li>
            Paragraphs (p)
</li>
          <li>
            Images and videos (Youtube, Vimeo)
</li>
          <li>
            Lists
<ol>
              <li>
                Ordered lists (ol)
</li>
              <li>
                Bullet points (ul)
</li>
            </ol>
          </li>
        </ul>
      </div>
      <div className="my-slide secondary complex">
        <h2>
          Pre baked slides:
</h2>
        <ul>
          <li>
            Primary - for titles
</li>
          <li>
            Secondary - for subtitles
</li>
          <li>
            Content
</li>
        </ul>
      </div>
      <div className="my-slide content">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/n0F6hSpxaFc" />
      </div>
      <div className="my-slide content">
        <iframe src="https://player.vimeo.com/video/105955605" width="640" height="360" />
      </div>
      <div className="my-slide primary">
        <h1>
          Lorem Ipsum
</h1>
      </div>
      <div className="my-slide secondary">
        <h2>
          What is Lorem Ipsum?
</h2>
      </div>
      <div className="my-slide content">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
<strong>
            1500s
</strong>
          , when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</p>
      </div>
      <div className="my-slide content">
        <blockquote>
          It has survived not only
<em>
            five centuries
</em>
          , but also the leap into electronic typesetting, remaining essentially unchanged.
</blockquote>
      </div>
      <div className="my-slide content">
        <p>
          It was popularised in the
<strong>
            1960s
</strong>
          with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
      </div>
      <div className="my-slide secondary">
        <h2>
          Where does it come from?
</h2>
      </div>
      <div className="my-slide content">
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
</p>
      </div>
      <div className="my-slide content">
        <p>
          It has roots in a piece of classical Latin literature from
<strong>
            45 BC
</strong>
          , making it over
<strong>
            2000
</strong>
          years old.
</p>
      </div>
      <div className="my-slide primary">
        <h1>
          Thanks...
</h1>
      </div>
    </CustomCarousel>
  )
}
const CustomCarousel = styled(Carousel)`
height:100%;
justify-content:flex-end;
&>.carousel.carousel-slider {
  overflow: unset;
  height: 100%;
  & div.slider-wrapper {
    height: 100%;
    &> ul.slider.animated {
      height: 100%;
      &>li.slide {
        height: 100%;
        background-color: unset;
        display:flex;
        justify-content:center;
        align-items:center;
        & > div iframe{
          width:100%;
          margin:0 
        }
      }
      ;
    }
    ;
  }
  &>.control-arrow.control-next,
  & .control-arrow.control-prev {
    bottom: unset;
    margin-top: unset;
    padding: unset;
  }
  ;
  &>.control-arrow.control-next {
    left: -50px
  }
  ;
  & .control-arrow.control-prev {
    left: -100px;
  }
}
`