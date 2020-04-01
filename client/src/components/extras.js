import React from 'react';
import extra from './css/Extras.module.css';
import fridge from '../images/kitchen.png';
import oven from '../images/gas-stove.png';
const extras = ()=> {


    return (
        <div className={extra.extrasIcons}>
       <div className={extra.insidefridge}>
        <img src={fridge} />
    
       </div>
       <div className={extra.insidefridge}>
           <img src={oven}/>
       </div>
        </div>
    )






}

export default extras;
