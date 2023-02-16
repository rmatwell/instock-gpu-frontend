import React, { useEffect, useState, forwardRef } from 'react';

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import ListingService from './services/ListingService';
import Nav from "./components/Nav"
import Table from "./components/Table";
import './index.css';


function App() {

  function filterData() { return data.filter(listing => listing.brand === 'ASUS') };


  const [data, setData] = useState([
    {
      id: "",
      brand: "",
      chipSet: "",
      model: "",
      price: null,
      url: "",
      date: "",
      image: ""
    }
  ]);

  const [filteredData, setFilteredData] = useState('');

  useEffect(() => {
    console.log('ASUS');
    setFilteredData(filterData());
    console.log(filterData());

  }, [data]);


  useEffect(() => {
    console.log('filtered data')
    console.table(filteredData)
  }, [filteredData]);

  useEffect(() => {
    ListingService.getAll("")
      .then(result => result.data)
      .then(result => setData(result))
  }, []);

  useEffect(() => {
    console.table(data)
  }, [data]);

  return (
    <div>
      <Nav data={data} />
      <Table data={filteredData} />
    </div>
  );
}



export default App;