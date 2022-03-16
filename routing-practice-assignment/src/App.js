import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter, // ----- enaable application for routing -----
  Switch, // ----- tell react which components/elements to show -----
  Route, // ----- specify the route for a component/element -----
  Link // ----- tag that will not reload the whole page -----
} from "react-router-dom";

import Word from './components/Word'
import Number from './components/Number'
import WordColor from './components/WordColor'

function App() {
  return (
    <BrowserRouter> {/* Makes everthing within, available for routing */}
      <div className="App">

        <Switch>
          <Route exact path ="/home">
            <h1>Welcome</h1>
          </Route>

          <Route exact path ="/:id">
            <Word></Word>
          </Route>

          <Route exact path ="/number/:number">
            <Number></Number>
          </Route>

          <Route exact path ="/:word/:fontColor/:backgroundColor">
            <WordColor></WordColor>
          </Route>


        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
