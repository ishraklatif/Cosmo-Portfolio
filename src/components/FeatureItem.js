import React from 'react';
import { Link } from 'react-router-dom';

function FeatureItem(props) {
  return (
    <>
      <li className='feature__item'>
        <Link className='feature__item__link' to={props.path}>
          <figure className='feature__item__pic-wrap' data-category={props.label}>
            <img
              className='feature__item__img'
              alt='img'
              src={props.src}
            />
          </figure>
          <div className='feature__item__info'>
            <h5 className='feature__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default FeatureItem;
