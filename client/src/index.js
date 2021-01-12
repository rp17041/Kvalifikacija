import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Policy from './Policy';
import Product from './Product';
import './index.css';
import Customer from './Customers';
// import Notfound from './notfound';
// <Route component={Notfound} />

const routing = (
  <Router>
    <div>
    
      <div class="topnav">
          <Link to="/">Home</Link>
          <Link to="/Policy">Policy</Link>
          <Link to="/Product">Product</Link>
          <Link to="/Customer">Customer</Link>
          <Link to="/Customer">Log out</Link>
      </div>
    
        <switch>
          <Route exact path="/" component={App} />
          <Route path="/Policy" component={Policy} />
          <Route path="/Product" component={Product} />
          <Route path="/Customer" component={Customer} />
        </switch>  
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));


