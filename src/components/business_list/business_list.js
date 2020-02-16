import React from 'react';
import Business from '../business/business';
import './business_list.css';

class BusinessList extends React.Component{
  render(){
      return(
         <div classname="BusinessList">
            <Business/> 
            <Business/> 
            <Business/> 
            <Business/> 
            <Business/> 
            <Business/> 
        </div>
      );
  }
}

export default BusinessList;