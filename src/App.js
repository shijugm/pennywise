import React from 'react';
import logo from './logo.svg';
import './css/App.css'; 
import './css/sidebar.css'; 
import SideBar from './sidebar';  

function App() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap">
        <h1>Pennywise</h1>
        <h2>Check out our first page!</h2>
      </div>
    </div>
  );
}

export default App;
  