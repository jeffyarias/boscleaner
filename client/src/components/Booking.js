import React, { Component, useState} from "react";
import styles from "./App.module.css";
import Modal from "./modal";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StripeCheckout from "react-stripe-checkout";
import TimePicker from "rc-time-picker";
import moment from "moment";
import "rc-time-picker/assets/index.css";
//import { Redirect } from "react-router-dom";

import Picker from 'react-mobile-picker-scroll';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//import PropTypes from 'prop-types';
/*<label>Bedrooms & Bathrooms <input type="password" name="field5" /></label>
<label>Confirm Password <input type="password" name="field6" /></label> */

const format = "h:mm a";

const now = moment()
  .hour(0)
  .minute(0);

class Booking extends Component {
  
  state = {
    name: "",
    email: "",
    phone: "",
    address: "",
    bedrooms: 0,
    bathrooms: 0,
    carpet: 0,
    discount: 0,
    price: 0,
    basePrice: 100,
    startDate: "",
    time: "",
    date: "",
    newtime: ""
  };

  formHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
   event.preventDefault();
    if (!this.state.name || !this.state.address) {
      /* let x  = document.getElementById('mycheck');
  if(!x.checked) {
  alert('you should agree with the terms');

  }
  */
      document.getElementById("name").focus();
    } else {
     event.preventDefault();

      this.setState({
        name: "",
        email: "",
        phone: "",
        address: "",
        bedrooms: 0,
        bathrooms: 0,
        price: 0,
        startDate: "",
        time: "",
        date: "",
        newtime: ""
      });
      document.getElementById("bedrooms").value = 0;
      document.getElementById("bathrooms").value = 0;



       
      const  {
        name,
        email,
        phone,
        address,
        bedrooms,
        bathrooms,
        price
      } = this.state;

      axios.post("/api/form", {
        name,
        email,
        phone,
        address,
        bedrooms,
        bathrooms,
        price
      });
    }

    // axios.get('/api/success').then(response =>{console.log(response)});
  };

  handleChange = date => {

    const d = date.toLocaleDateString();
    this.setState({
      startDate: date,
      date: d
    });

    console.log(d);
    console.log(date);
  };

  onchange = value => {
    const time = value && value.format(format);
    console.log(value && value.format(format));
    console.log("this is the time: " + time);
    this.setState({
      time
    });
  };

  render() {

   
    //console.log(this.props);
    if (this.state.bathrooms > 0 || this.state.bedrooms) {
      var total =
        (Number(this.state.bedrooms) + Number(this.state.bathrooms)) * 20 +
        this.state.basePrice;
       

      //const total = (Number(this.state.bedrooms) + Number(this.state.bathrooms)) * 20 + this.state.basePrice (this.state.bathrooms && this.state.bedrooms) ? 100 : 0;
      console.log(this.state.price);
      console.log(this.state.name);
      console.log(this.state);
    } else {
      total = 0;
    }

    const bedRommsHandler = event => {
      var price = this.state.price
     total = (Number(this.state.bedrooms) + Number(this.state.bathrooms)) * 20 +
        this.state.basePrice;
      
      this.setState({
        //bedrooms: event.target.value,
          bedrooms: document.getElementById('numb').value,
        price: total
      });
    };

    const bathRoomshandler = event => {
      // var newPrice =  (20 * this.state.bathrooms);
      
     // var price = this.state.price
      total = (Number(this.state.bedrooms) + Number(this.state.bathrooms)) * 20 +
         this.state.basePrice;
      this.setState({
        bathrooms: event.target.value,
        
        price: total
      });
    };
   // console.log("This is a tet for the: " + total);
   toast.configure();
   
   const service = {
    
     ...this.state
     

   }
   service.price = total;

   async function handlerToken(token) {
     //toast('Success! Check Email for details', {type: 'success'});
      //total2 = total
     
     
 

     // console.log('Hello world' + response.data)
      //console.log({token, total2})
     const response = await axios.post("/api/stripe", {
        token,
        service
        
       
      })
     // console.log(total2)
      console.log('Hello world' + response.data)
      console.log('Hello world again')
      console.log('This is the data ' + response.data);
      const { status } = response.data
      console.log({status})
      if(status === 'success') {
       toast('Success! Check Email for details', {type: 'success'});


      }else {
        toast('Something went wrong', {type: 'error'});

      }
    };
    function incrementValue()
    {  
        var value = parseInt(document.getElementById('numb').value, 10);
        value = isNaN(value) ? 0 : value;
         if (value === 8) {return 8}
         else {value++;
       
         }
       
       
        document.getElementById('numb').value = value;
        
    }
    
    function decrementValue()
    {
        var value = parseInt(document.getElementById('numb').value, 10);
        value = isNaN(value) ? 0 : value;
        if( value === 0) {return 0}
         else {
            value--;
         }
        
        document.getElementById('numb').value = value;
    }

    function incrementValue2()
    {  
        var value = parseInt(document.getElementById('numb2').value, 10);
        value = isNaN(value) ? 0 : value;
         if (value === 8) {return 8}
         else {value++;
       
         }
       
       
        document.getElementById('numb2').value = value;
        
    }
    
    function decrementValue2()
    {
        var value = parseInt(document.getElementById('numb2').value, 10);
        value = isNaN(value) ? 0 : value;
        if( value === 0) {return 0}
         else {
            value--;
         }
        
        document.getElementById('numb2').value = value;
          
    }
    return (
      <div className={styles.container}>
        <div className={styles.box1}>
          <div className={styles.formstyle10}>
            <h1>
              Booking Information
              <span>Enter Information for the best cleaning of you life</span>
            </h1>
            <form onSubmit={this.submitHandler}>
              <div className={styles.section}>
                <span>1</span>First Name &amp; Address
              </div>
              <div className={styles.innerwrap}>
                <label>
                  Your Full Name{" "}
                  <input
                    id="name"
                    onChange={this.formHandler}
                    type="text"
                    name="name"
                    value={this.state.name}
                  />
                </label>
                <label id="textarea">
                  Address{" "}
                  <textarea
                    onChange={this.formHandler}
                    name="address"
                    value={this.state.address}
                  ></textarea>
                </label>
              </div>

              <div className={styles.section}>
                <span>2</span>Email &amp; Phone
              </div>
              <div className={styles.innerwrap}>
                <label>
                  Email Address{" "}
                  <input
                    onChange={this.formHandler}
                    type="email"
                    name="email"
                    value={this.state.email}
                  />
                </label>
                <label>
                  Phone Number{" "}
                  <input
                    onChange={this.formHandler}
                    type="text"
                    name="phone"
                    value={this.state.phone}
                  />
                </label>
              </div>

              <div className={styles.section}>
                <span>3</span>Bedrooms & Bathrooms
                        
              </div>
              <div className={styles.innerwrap}>
              <label for="button">Bedrooms</label>
              <div className={styles.btns} >
              
                 <button className={styles.btn} onClick={decrementValue} type="button">-</button>
          <input id="numb" min="0" max="8" value="0"></input>
          <button className={styles.btn} onClick={incrementValue} type="button">+</button>
          
          </div>
          <label for="button">Bathrooms</label>
          <div className={styles.btns} > 
          <button className={styles.btn} onClick={()=>{decrementValue2(); bedRommsHandler();}} type="button">-</button>
          <input id="numb2" min="0" max="8" value="0"></input>
          <button className={styles.btn} onClick={()=>{incrementValue2(); bedRommsHandler();} }type="button">+</button>
          
          </div>

    </div>



         

{/*             
              <div className={styles.innerwrap}>
                <label>
                  Bedrooms
                  <input className={styles.input}
                    id="bedrooms"
                    onChange={this.formHandler}
                    onClick={bedRommsHandler}
                    type="number"
                    name="bedRooms"
                    min="0"
                    max="8"
                    autoComplete="false"
                    defaultValue="0"
                  />{" "}
                </label>
                <label>
                  Bathrooms{" "}
                  <input className={styles.input}
                    id="bathrooms"
                    onChange={this.formHandler}
                    onClick={bathRoomshandler}
                    type="number"
                    name="bathRooms"
                    min="0"
                    max="8"
                    autoComplete="false"
                    defaultValue="0"
                  />{" "}
                </label>
                
                
              </div> */}
              
              <div className={styles.section}>
                <span>4</span>Date & Time
              </div>
              <div className={styles.innerwrap}>
                <div className={styles.datetime}>
                  <div className={styles.date}>
                    <label>Choose a Date </label>
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                      onClick={this.formHandler}
                    />
                  </div>
                  <div className={styles.time}>
                    <label for="Choose a Time">Choose A Time</label>

                    <TimePicker
                      id="time"
                      showSecond={false}
                      defaultValue={now}
                      className="xxx"
                      onChange={this.onchange}
                      format={format}
                      use12Hours
                      inputReadOnly
                      onClick={this.formHandler}
                      
                    />



                  </div>
                </div>
              </div>

              <div className={styles.buttonsection}>
                <StripeCheckout
                preventDefault
                  amount={total * 100}
                  label="Credit Card"
                  name="Boston Maids"
                  email=""
                  token={handlerToken}
                  //token={ (token) =>{axios.post('/api/stripe', token)}}

                  stripeKey={"pk_test_yBMj0cqYIXUsXeJ0lnVBil1T"}
                />

                <button className={styles.buttom} onClick={this.submitHandler}>
                  Cash Payment
                </button>
                <span class="privacy-policy">
                  <input id="mycheck" type="checkbox" name="checkbox" />
                  You agree to our Terms and Policy.
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.box2}>
          <Modal
            price={this.state.price}
            bedrooms={this.state.bedrooms}
            bathrooms={this.state.bathrooms}
            date={this.state.date}
            time={this.state.time}
            totalPrice={total}
          />
        </div>
      </div>
    );
  }
}


export default Booking;