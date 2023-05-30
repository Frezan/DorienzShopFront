import React from 'react'
import { useState } from 'react';
import { Carousel } from 'react-bootstrap'
import bannerProduct from '/assets/img/bannerProduct.jpg'
import './Banner.scss'

const Banner = () => {

  return (
    <div style={{ backgroundImage: 'url(' + bannerProduct + ')' }} className='bannerHome'>
      <div>
        <h3>Voir nos produits mis en avant</h3>
        <p>Venez voir ces ordinateurs mis en avant sur le site.</p>
      </div>

    </div>

  )
}

export default Banner