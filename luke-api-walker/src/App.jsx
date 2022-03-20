import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,  // ----- enable application for routing -----
  Switch, // --- allows us to tell react which components/elements will show conditionally based on the route ---
  Route, // --- allows us to specify the route for a component/element
  Link  // ----- anchor tag, but will not reload the whole page -----
} from "react-router-dom";

import Form from './components/Form';


function App() {
  return (
    <BrowserRouter>
      <div className="App container">
      <Form></Form>
        
        <h1>Testing</h1>
      </div>

      <Switch>
        <Route exact path = "/films">
          <Api></Api>      
        </Route>

        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
