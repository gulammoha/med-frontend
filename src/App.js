import './App.css';
import Register from './Components.js/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import Login from './Components.js/Login';
import Navbar from './Components.js/navbar';
import Dashboard from ''
import AddStudent from './Components.js/addStudent';
import UpdateStudent from './Components.js/updateStudent';
import Home from './Components.js/Home';
function App(){
  return(
    <Router>
        <div className="App">
          <Navbar/>
        <Switch>
          <Route exact path ="/">
            <Home/>
          </Route>
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
            <AddStudent/>
          </Route>
          <Route path ="/update/:id">
            <UpdateStudent/>
          </Route>
        </Switch>  
      </div>
    </Router>
 )}

export default App
