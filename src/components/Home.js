import React from 'react'
import intrologo from './intro.jpg'
import './Home.css'
import '../App.css'
import './Button.css'
import {Button} from './Button'

const Home = () => {
  
  return (
    <div className='home-conatiner'>
        <img className='intro-img' src={intrologo} alt="BigCo Inc. logo"/>
        
        <h1>NEW CATALOG 2022</h1>
        <div className='hero-btns'>
          
          <a href='catalog.pdf' download={'catalog.pdf'} className='btn1'>DOWNLOAD</a>
         
        
             
          
         
        </div>
    </div>
  )
}

export default Home