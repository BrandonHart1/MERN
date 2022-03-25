import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

import {
  BrowserRouter,
  Switch,
  Route,
  Link // anchor tag without refreshing the page
} from "react-router-dom";


import AllProducts from './components/AllProducts';
import ProductForm from './components/ProductForm';
import OneProductDetail from './components/OneProductDetail';
import EditProductForm from './components/EditProductForm';


function App() {

// variable that can be sent to the form component that will toggle the varibables value eatch time the form is submitted

const [formSubmitted, setFormSubmitted] = useState(false); // "false" will toggle between false and true
  return (
    <BrowserRouter>
    <div className="App container">
      <h1>Products</h1> {/* Products header ill show up regardless of the route */}
      <Link to="/" className="btn btn-info">Home</Link> {/* Home button will show up regardless of the route */}
      <Switch>
        <Route exact path="/"> {/* ProductForm and AllProducts will only show up on based on the route */}
          <ProductForm formSubmitted = {formSubmitted} setFormSubmitted = {setFormSubmitted}/>
          <AllProducts formSubmitted = {formSubmitted}/>
        </Route>
        <Route exact path="/description/:_id">
          <OneProductDetail />
        </Route>
        <Route exact path="/edit/:_id">
          <EditProductForm/>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
