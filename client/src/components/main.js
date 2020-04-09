
import React, { Component } from 'react';
import nav from  '../navbar.css';
import Slider from './Slider2';
import Booking from './Booking';
import Success from './success';
import About from './about';
import { Route, Link } from 'react-router-dom';
import Sticky from './sticky';
import styles from './App.module.css';





class Main extends Component {
    
render() {
    
    return(
        <div>
    <header>
    
<div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      Boston Maids
    </div>
  </div>
  <div className="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <a href="/" >Book Now</a>
    <a href="/booking" >Booking</a>
    <Link to="/success">Success</Link>
    <Link to="/about">About</Link>
    
  </div>
  
  
</div>

</header>
{/* <Sticky /> */}
 {/*<Route path="/" exact render={()=><h1>Hello World</h1>} />
<Route path="/success"  render={()=><h1>Hello World2</h1>} /> */}
<Route path="/" exact component={Slider} />
<Route path="/" exact component={Booking} />
<Route path="/booking" component={Booking} />
<Route path="/success"  component={Success} />
<Route path="/about" component={About} />


</div>

)

};


    
}

export default Main;