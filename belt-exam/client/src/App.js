import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Link // anchor tag without refreshing the page
} from "react-router-dom";
import React, { useState } from 'react'

import AllPets from './components/AllPets';
import OnePetDetail from './components/OnePetDetail';
import PetForm from './components/PetForm';
import EditPetForm from './components/EditPetForm';


  function App() {

    const [formSubmitted, setFormSubmitted] = useState(false);


    return (
      <BrowserRouter>
        <div classname="App container">
          <h1>Pet Shelter</h1>
          <Switch>
            <Route exact path="/">
                <AllPets formSubmitted = {formSubmitted}/>
            </Route>
            <Route exact path="/pets/new">
              <PetForm formSubmitted = {formSubmitted} setFormSubmitted = {setFormSubmitted}/>
            </Route>
            <Route exact path="/pets/:_id">
              <OnePetDetail/>
            </Route>
            <Route exact path="/pets/edit/:_id">
              <EditPetForm/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )


}




export default App;
