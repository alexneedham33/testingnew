import React from 'react';
import './App.css';
import BusinessList from '../business_list/business_list';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar/>;
      <BusinessList/>;
    </div>
   
  );
}

export default App;
