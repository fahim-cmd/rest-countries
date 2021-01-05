import './App.css';
import Main from './components/Main/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotMatch from './components/NotMatch/NotMatch';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/main">
            <Main/>
          </Route>
          <Route exact path="/">
            <Main/> 
          </Route>
          <Route path="/country/:countryName">
            <CountryDetails/>
          </Route>
          <Route path="/*"> 
            <NotMatch/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
