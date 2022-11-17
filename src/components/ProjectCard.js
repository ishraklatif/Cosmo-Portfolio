//Homepage Card
import React from 'react';
import './ProjectCard.css';
import CardItem from './CardItem';

function ProjectCard() {
  return (
    <div className='cards'>
      <h1>LATEST PROJECTS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='file:///images/img-9.jpg'
              text='Description of Product'
              label='product'
              path='/services'
            />
            <CardItem
              src='file:///images/img-2.jpg'
              text='Description of Product'
              label='product'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='file:///images/img-3.jpg'
              text='Description of Product'
              label='product'
              path='/services'
            />
            <CardItem
              src='file:///images/img-4.jpg'
              text='Description of Product'
              label='product'
              path='/products'
            />
            <CardItem
              src='file:///images/img-8.jpg'
              text='Description of Product'
              label='product'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
