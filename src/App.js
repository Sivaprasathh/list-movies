
import './App.css';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Login from "./components/Login"
import Signup from './components/Signup';
import Movie from "./components/Movie";
import Display from "./components/Display";
function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
     <Route exact path = "/" component = {Login} />
     <Route exact path = "/signup" component = {Signup} />
     <Route exact path = "/movie" component = {Movie} />
     <Route exact path = "/movie:name" component = {Display} />
     </Switch>
     </BrowserRouter>
    </>
  );
}

export default App;
