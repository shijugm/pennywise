import React from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import './css/App.css'; 
import './css/sidebar.css'; 
import SideBar from './sidebar';  
import Navbar from './Navigation/Navbar'

const Home = () => (
  <div>
    <h2>Home Page </h2>
  </div>
);

const Accounts = () => (
  <div>
    <h2>Accounts Page</h2>
  </div>
);
const Budget = () => (
  <div>
    <h2>Budget Page</h2>
  </div>
);

function App() {
  return (
    <Router>  
      <div id="App">
        <div id="page-wrap">   
            <Navbar/>
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"nav-wrapper"} />
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/accounts" component={Accounts} />
        <Route path="/budget" component={Budget} />
      </div>
    </Router>
  );
}

export default App;
      