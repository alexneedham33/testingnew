import React from 'react';
import ReactDOM from 'react-dom';
import './business.css';

const business_name = 'Tesco';
const business_type = 'Food store';
const business_ceo = 'Alex';


export const business = (
    <div id="business_container">
      <h1>{business_name}</h1>
      <h1>{business_type}</h1>
      <h1>{business_ceo}</h1>
      <div id="img1">
          <img src={require("./tesco_img.webp")} alt="Tesco"/>
      </div>
    </div>
    )












