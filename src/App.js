import './App.css';
import Register from './Components.js/Register';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components.js/Login';
import Navbar from './Components.js/navbar';
import AddStudent from './Components.js/addStudent';
import UpdateStudent from './Components.js/updateStudent';
import Home from './Components.js/Home';
import Dashboard from './Components.js/dashboard';
import { Routes } from 'react-router-dom';
function App(){
  return(
    <Router>
        <div className="App">
          <Navbar/>
        <Routes>
          <Route exact path ="/"element={<Home/>}/>
          <Route path ="/Login"  element={<Login/>}/>
          <Route path ="/Register" element={<Register/>}/>
          <Route path ="/Dashboard" element={<Dashboard/>}/>
          <Route path ="/addStudent" element={<AddStudent/>}/>
          <Route path ="/update/:id" element={<UpdateStudent/>}/>
        </Routes>  
      </div>
    </Router>
 )}

export default App
