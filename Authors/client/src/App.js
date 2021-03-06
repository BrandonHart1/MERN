import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Link // anchor tag without refreshing the page
} from "react-router-dom";

import AllAuthors from './components/AllAuthors';
import AuthorForm from './components/AuthorForm';
import EditAuthorForm from './components/EditAuthorForm';


function App() {
  return (
    <BrowserRouter>
        <div className="App container">
          <h1>Favorite Authors</h1>
          <Switch>
            <Route exact path="/">
              <AllAuthors/>
            </Route>
            <Route exaxt path="/authors/new">
              <AuthorForm/>
            </Route>
            <Route exact path="/authors/edit/:_id">
              <EditAuthorForm/>
            </Route>
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
