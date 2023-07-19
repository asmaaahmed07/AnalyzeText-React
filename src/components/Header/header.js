/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import logoimg from '../../assests/logo.jpg'
import './header.css'

function header() {
    return( 
        <div className='header-main'>
        <h1>New software coming!!!</h1>
        <img className= 'logoimg' src={logoimg} alt="Description of the image" />
        <p>super excited for this project.</p>
        </div>
    );
}

export default header;