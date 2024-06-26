//Homepage Card
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>FEATURED PRODUCTS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Description of Product'
              label='product'
              path='/productdetails'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Description of Product'
              label='product'
              path='/productdetails'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Description of Product'
              label='product'
              path='/productdetails'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Description of Product'
              label='product'
              path='/productdetails'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Description of Product'
              label='product'
              path='/productdetails'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
