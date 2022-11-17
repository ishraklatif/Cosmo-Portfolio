import React from 'react';
import { Link } from 'react-router-dom';

function AdItem(props) {
  return (
    <>
      <li className='ad__item'>
        <Link className='ad__item__link' to={props.path}>
          <figure className='ad__item__pic-wrap' data-category={props.label}>
            <img
              className='ad__item__img'
              alt='img'
              src={props.src}
            />
          </figure>
          <div className='ad__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default AdItem;
