import React, { useEffect, useState } from 'react';

import ListingService from './services/ListingService';
import Nav from "./components/Nav"
import Table from "./components/Table";
import './index.css';

function App() {

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

  const [filteredData, setFilteredData] = useState([{ data }]);

  useEffect(() => {
    ListingService.getAll("")
      .then(result => result.data)
      .then(result => setData(result))
  }, []);

  useEffect(() => {
    setFilteredData(data);
    console.log(filteredData);
  }, [data]);

  return (
    <div>
      <Nav data={data} setFilteredData={setFilteredData} />
      <Table data={filteredData} />
    </div>
  );
}

export default App;