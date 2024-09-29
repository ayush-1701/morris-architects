import React from 'react';
import logo from '../logo.svg';
import './home.css';
import ControlledCarousel from '../Carousel/carousel';
import CarouselFade from '../Carousel/carousel';

const Home = () => {
    return (
      <div className='parentDiv'>
        <div className='carouselHeight'>
            <CarouselFade style={{maxHeight:"620px"}}/>
        </div>

        <div>
          Hi
        </div>
      </div>
      
    );
  };
  
  export default Home;