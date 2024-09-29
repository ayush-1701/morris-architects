
// Then, modify your carousel component like this:

import React from 'react';
import './carousel.css';
import { FaAngleDoubleLeft, FaAngleDoubleRight  } from "react-icons/fa";


import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';
// import Captioned from 'react-awesome-slider/src/components/captioned';
// import CaptionedStyles from 'react-awesome-slider/src/components/captioned/styles.scss';
import AwesomeSlider from 'react-awesome-slider';

// import withCaption from 'react-awesome-slider/dist/captioned';

import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/Black Ensemble Theatre_Rossiter.jpg';
import image2 from '../assets/FW Parker School Auditorium_HED.jpg';
import image3 from '../assets/Green Line Performing Arts Center_Photo by Steven Hall.jpg';
import image4 from '../assets/Lookingglass Theatre.jpg';
import image5 from '../assets/Old Town School of Music.jpg';


function CarouselFade() {

  const CustomPrevArrow = (props) => {
    return (
      <span
        className="custom-prev-arrow"
        onClick={props.onClick}
      >
        {/* &#9664; Left arrow symbol */}
        <FaAngleDoubleLeft />

      </span>
    );
  };
  
  const CustomNextArrow = (props) => {
    return (
      <span
        className="custom-next-arrow"
        onClick={props.onClick}
      >
        <FaAngleDoubleRight />

      </span>
    );
  };

  return (
    <div>

    <Carousel 
      // fade  
      prevIcon={<CustomPrevArrow />}
      nextIcon={<CustomNextArrow />}
      >
      <Carousel.Item interval={300000}>
        <img 
          className="d-block w-100 center-cropped"
          src={image1}
          style={{ width: 'auto', maxHeight: '620px' }}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className='captions'>
            <h5 >Black Ensemble Theatre Rossiter</h5>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 center-cropped"
          src={image2}
          style={{ width: 'auto', maxHeight: '620px' }}
          alt="Second slide"
        />
        <Carousel.Caption>
        <div className='captions'> 
          <h5>FW Parker School Auditorium</h5>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={image3}
          style={{ width: 'auto', maxHeight: '620px' }}
          alt="Third slide"
        />
        <Carousel.Caption>
        <div className='captions'>
          <h5>Green Line Performing Arts Center</h5>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={image4}
          style={{ width: 'auto', maxHeight: '620px' }}
          alt="Fourth slide"
        />
        <Carousel.Caption>
        <div className='captions'>
          <h5>Lookingglass Theatre</h5>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={image5}
          style={{ width: 'auto', maxHeight: '620px' }}
          alt="Fifth slide"
        />
        <Carousel.Caption>
        <div className='captions'>
          <h5>Old Town School of Music</h5>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
    // <div>
    //   <AwesomeSlider
    //     play={true}
    //     cancelOnInteraction={false} // should stop playing on user interaction
    //     interval={6000}
    //     animation="foldOutAnimation" 
    //     className="aws-btn" style={{height: "80vh"}}>
    //     <div data-src={image1}>
    //     <p className="caption">This is the first caption.</p>

    //     </div>
    //     <div data-src={image2}>
    //     <p className="caption">This is the first caption.</p>

    //     </div>
    //     <div data-src={image3}>
    //     <p className="caption">This is the first caption.</p>

    //     </div>
    //     <div data-src={image4}>
    //     <p className="caption">This is the first caption.</p>

    //     </div>
    //     <div data-src={image5}>
    //     <p className="caption">This is the first caption.</p>

    //     </div>

    //   </AwesomeSlider>

    //   <div style={{marginTop:"40px"}}>
    //     Helloooo
    //   </div>
    // </div>
  );
}

export default CarouselFade;