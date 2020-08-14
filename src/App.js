import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Inform from './components/Inform';
import Navbar from './components/Navbar';
import Sortbar from './components/Sortbar';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <br />
      <h4>Why People Choose Us Over The Rest.</h4>
      <Inform />
      <br />
      <Sortbar />
      <br />
      <Users />
      <br />
      <h5><a href="..." style={{color: "rgb(30, 123, 211)"}}>View More</a></h5>
      <br />
      <Footer />
    </div>
  );
}

export default App;
