import React from 'react';
import logo from '../logo.svg';
import './contactUs.css';

const ContactUs = () => {
    return (
      <div>
        <div class="bg-light py-5">
            <div class="container">
                <div class="d-flex justify-content-between">
                    <h1 class="fw-bold">Contact us</h1>
                </div>
            </div>
        </div>

        <div class='contactParent'>
            <div class='details'>
                <div class='leftColumn'>
                    left
                </div>

                <div class='rightColumn'>
                    right
                </div>
            </div>
        </div>
      </div>
      
    );
  };
  
  export default ContactUs;