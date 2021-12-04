import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react'; 
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


import Navbar from './components/navbar.component';

function App() {
  return (
    <Router>
      <Navbar/>

      <br/>
      <Route path="/" component="" />
      <Route path="/edit/:id" component="" />
      <Route path="/create" component=""/>
      
    </Router>
  );
}

export default App;
