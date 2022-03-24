import logo from './logo.svg';
import './App.css';
import OneProductDetail from './components/OneProductDetail';

import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
        <div className="App container">
          <h1> Products </h1>
          <Switch>

              <Route exact path="/:_id">
                <OneProductDetail></OneProductDetail>
              </Route>

          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
