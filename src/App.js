import React from 'react';
import Nav from './components/nav/Nav';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import HomePage from './components/pages/HomePage';
import Products from './components/pages/Products';
import ProductDetails from './components/pages/ProductDetails';
import About from './components/pages/About';
import Indoor from './components/pages/Indoor';
import Facade from './components/pages/Facade';
import Landscape from './components/pages/Landscape';
import Aviation from './components/pages/Aviation';


function App() {
  return (
     <>
     
      <Router>
      <Nav/> 
          
          
            <Switch>
           
             <Route path='/' exact component={HomePage}/>
             <Route path='/products'  component={Products}/>
             <Route path='/productdetails'  component={ProductDetails}/>
             <Route path='/about'  component={About}/>
             <Route path='/indoor'  component={Indoor}/>
             <Route path='/facade'  component={Facade}/>
             <Route path='/landscape'  component={Landscape}/>
             <Route path='/aviation'  component={Aviation}/>
             
          </Switch>
         
    
      </Router>
     </>
  );
}

export default App;
