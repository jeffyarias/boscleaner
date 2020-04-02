import React from 'react';
import extra from './css/Extras.module.css';
import fridge from '../images/kitchen.png';
import oven from '../images/gas-stove.png';
import truck from '../images/moving-truck.png';
import wiping from '../images/wiping.png'
const extras = ()=> {


    return (
        <div className={extra.extrasIcons}>
       <div className={extra.insidefridge}>
        <img src={fridge} />
        <p className={extra.title}>Inside the fridge</p>
    
       </div>
       <div className={extra.insidefridge}>
           <img src={oven}/>
           <p className={extra.title}>Inside the Oven</p>
       </div>
       <div className={extra.insidefridge}>
           <img src={truck }/>
           <p className={extra.title}>Move in/out</p>
           </div>

           <div className={extra.insidefridge}>
           <img src={wiping }/>
           <p className={extra.title}>Wall Washing</p>
       </div>
        </div>
    )






}

export default extras;
