import React from 'react';
import logo from '../logo.svg';
import './noPage.css';
import { Button } from 'bootstrap';
import { useNavigate } from 'react-router-dom';

const NoPage = () => {

    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/'); // Replace '/target-route' with your desired route
    };


    return (
        <section class="page_404">
        <div class="container">
          <div class="row"> 
          <div class="col-sm-12 ">
          <div class="col-sm-10 col-sm-offset-1  text-center">
          <div class="four_zero_four_bg">
            <h1 class="text-center ">404</h1>
          
          
          </div>
          
          <div class="contant_box_404">
          <h3 class="h2">
          Look like you're lost
          </h3>
          
          <p>the page you are looking for not avaible!</p>
          
          {/* <a  class="link_404"></a> */}
          <button onClick={handleClick}>
            Go to Home
          </button>
        </div>
          </div>
          </div>
          </div>
        </div>
      </section>
    
    
    );
  };
  
  export default NoPage;