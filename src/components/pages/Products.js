import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import Cards from '../Cards'
import IndoorItem from '../IndoorItems'
import FacadeItems from '../FacadeItems'
import LandscapeItems from '../LandscapeItems'
import AviationItems from '../AviationItems'
export default function Products(){
  return (
    <>
   
      
      <IndoorItem/>
      <FacadeItems/>
      <LandscapeItems/>
      <AviationItems/>
      <Footer/> 
    </>
  )
}
