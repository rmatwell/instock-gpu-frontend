import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import Table from "./components/Table";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand sticky-top navbar-light" style={{ backgroundColor: '#3fa3ff', width: '100%' }} >
          <img src="gpu-icon-0.png" style={{ marginLeft: 30, height: 45, width: 45 }} alt="logo" />
          <a href="/" className="navbar-brand" style={{ marginLeft: 10, color: 'white' }}>
            instock GPU
          </a>
        </nav >
        <Table />
      </div >
    );
  }
}

export default App;