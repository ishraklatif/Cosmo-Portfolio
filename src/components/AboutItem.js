import React from 'react'
import product1 from './img1.JPG'
import product2 from './img2.JPG'
import product3 from './img3.JPG'
import product4 from './img4.JPG'
import './Feature.css'
import FeatureItem from './FeatureItem';
import './Button.css'
import {Button} from './Button'

const AboutItem = () => {
  
  return (
    // <div className='feature-container'>
    //     <h1>PRODUCT</h1>
    //     <div className='feature__container'>
    //     <div className='feature__wrapper'>
    //     <div className='imgs__wrapper'>
    //     <div className='img__wrapper'>
    //       <figure className='feature__item__pic-wrap'>
    //     <img className='feature-img' src={product1} alt="BigCo Inc. logo"/>
    //     </figure>
    //     <h2 className='text'>INDOOR</h2>
    //     </div>
    //     </div>
    //     <div className='imgs__wrapper'>
    //     <div className='img__wrapper'>
    //     <img className='feature-img' src={product2} alt="BigCo Inc. logo"/>
    //     <h2 className='text'>FACADE</h2>
    //     </div>
    //     </div>
    //     <div className='imgs__wrapper'>
    //     <div className='img__wrapper'>
    //     <img className='feature-img' src={product3} alt="BigCo Inc. logo"/>
    //     <h2 className='text'>LANDSCAPE</h2>
    //     </div>
    //     </div>
    //     <div className='imgs__wrapper'>
    //     <div className='img__wrapper'>
    //     <img className='feature-img' src={product4} alt="BigCo Inc. logo"/>
    //     <h2 className='text'>AVIATION  & STADIUM</h2>
    //     </div>
    //     </div>
        
       
        

    // </div>
    // </div>
    // </div>
    <div className='feature'>
    <h1>BOARD OF DIRECTORS</h1>
    <div className='feature__container'>
      <div className='feature__wrapper'>
        <ul className='feature__items'>
          <FeatureItem
            src={product1}
            text='DIRECTOR1'
            
            path='/'
          />
          <FeatureItem
            src={product2}
            text='DIRECTOR2'
            
            path='/'
          />
        
          <FeatureItem
            src={product3}
            text='DIRECTOR3'
          
            path='/'
          />
          <FeatureItem
            src={product4}
            text='DIRECTOR4'
            
            path='/'
          />
        
        </ul>
      </div>
    </div>
  </div>
  )
}

export default AboutItem

// import React from "react";
// import CardItem from "./CardItem";
// import "./Feature.css";
// import product1 from './img1.JPG'
// import product2 from './img2.JPG'
// import product3 from './img3.JPG'
// import product4 from './img4.JPG'

// function Feature() {
//   return (
//     <div className="cards">
//       <h1>Check out these EPIC Destinations!</h1>
//       <div className="cards__container">
//         <div className="cards__wrapper">
//           <ul className="cards__items">
//             <CardItem
//               src={product1}
//               text="Explore the hidden waterfall deep inside the Amazon Jungle"
              
//               path="/services"
//             />
//             <CardItem
//               src={product2}
//               text="Travel through the Islands of Bali in a Private Cruise"
              
//               path="/services"
//             />
//           </ul>
//           <ul className="cards__items">
//             <CardItem
//               src={product3}
//               text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              
//               path="/services"
//             />
//             <CardItem
//               src={product4}
//               text="Experience Football on Top of the Himilayan Mountains"
              
//               path="/services"
//             />
           
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Feature;