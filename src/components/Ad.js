//Homepage Card
import React from 'react';
import './Ad.css';
import AdItem from './AdItem';
import product from './Nichia-logo.png'
import product2 from './osram.png'
import product3 from './iso.png'
function Ad() {
  return (
    <div className='ad'>
      <h1>LED CHIPS COMPONENT</h1>
      <div className='ad__container'>
        <div className='ad__wrapper'>
          <ul className='ad__items'>
            <AdItem
              src={product}
              path='/productdetails'
            />
            <AdItem
              src={product}
              path='/productdetails'
            />
            <AdItem
              src={product}
              path='/productdetails'
            />
            <AdItem
              src={product}
              path='/productdetails'
            />
            <AdItem
              src={product}
              path='/productdetails'
            />
            <AdItem
              src={product}
              path='/productdetails'
            />
          </ul>
          <ul className='ad__items'>
            <AdItem
              src={product}
              path='/productdetails'
            />
            <AdItem
              src={product}
              path='/productdetails'
            />
            <AdItem
              src={product}
              path='/productdetails'
            />
            <AdItem
              src={product}
              path='/productdetails'
            />
            <AdItem
              src={product}
              path='/productdetails'
            />
            <AdItem
              src={product}
              path='/productdetails'
            />
          </ul>
        </div>
      </div>
      <h1>DRIVER COMPONENT</h1>
      <div className='ad__container'>
        <div className='ad__wrapper'>
          <ul className='ad__items'>
            <AdItem
              src={product2}
              path='/productdetails'
            />
            <AdItem
              src={product2}
              path='/productdetails'
            />
            <AdItem
              src={product2}
              path='/productdetails'
            />
            <AdItem
              src={product2}
              path='/productdetails'
            />
            <AdItem
              src={product2}
              path='/productdetails'
            />
            <AdItem
              src={product2}
              path='/productdetails'
            />
          </ul>
          <ul className='ad__items'>
            <AdItem
              src={product2}
              path='/productdetails'
            />
            <AdItem
              src={product2}
              path='/productdetails'
            />
            <AdItem
              src={product2}
              path='/productdetails'
            />
            <AdItem
              src={product2}
              path='/productdetails'
            />
            <AdItem
              src={product2}
              path='/productdetails'
            />
            <AdItem
              src={product2}
              path='/productdetails'
            />
          </ul>
        </div>
      </div>
      <h1>CERTIFICATIONS</h1>
      <div className='ad__container'>
        <div className='ad__wrapper'>
          <ul className='ad__items'>
            <AdItem
              src={product3}
              path='/productdetails'
            />
            <AdItem
              src={product3}
              path='/productdetails'
            />
            <AdItem
              src={product3}
              path='/productdetails'
            />
            <AdItem
              src={product3}
              path='/productdetails'
            />
            <AdItem
              src={product3}
              path='/productdetails'
            />
            <AdItem
              src={product3}
              path='/productdetails'
            />
          </ul>
          <ul className='ad__items'>
            <AdItem
              src={product3}
              path='/productdetails'
            />
            <AdItem
              src={product3}
              path='/productdetails'
            />
            <AdItem
              src={product3}
              path='/productdetails'
            />
            <AdItem
              src={product3}
              path='/productdetails'
            />
            <AdItem
              src={product3}
              path='/productdetails'
            />
            <AdItem
              src={product3}
              path='/productdetails'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Ad;
