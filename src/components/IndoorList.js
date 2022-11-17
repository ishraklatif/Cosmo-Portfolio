import React from 'react';
import { Link } from 'react-router-dom';

function IndoorList(props) {
  return (
    <>
      <li className='indoor__item'>
        <Link className='indoor__item__link' to={props.path}>
          <figure className='indoor__item__pic-wrap' data-category={props.label}>
            <img
              className='indoor__item__img'
              alt='img'
              src={props.src}
            />
          </figure>
          <div className='indoor__item__info'>
            <h5 className='ad__item__text'>{props.text}</h5>
          </div>
        </Link>
    </li>
    
    </>
  );
}

export default IndoorList;
