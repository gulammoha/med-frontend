import './App.css';
import Register from './Components.js/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import Login from './Components.js/Login';
import Navbar from './Components.js/navbar';
import Vendors from './Components.js/vendors';
import Dashboard from ''
function App(){
  return(
    <Router>
        <div className="App">
        <Switch>
        <Route path ="/Login">
            <Login/>
          </Route>
          <Route path ="/Register">
            <Register/>
          </Route>
     
          <Route path ="/Dashboard">
            <Dashboard/>
          </Route>
          <Route path ="/addStudent">
            <addStudent/>
          </Route>
          <Route path ="Navbar">
            <Navbar/>
          </Route>
        </Switch>  
   
      </div>
    </Router>
 )}

export default App
