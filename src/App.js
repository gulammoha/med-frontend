import './App.css';
import Register from './pages/Register';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login';
import Navbar from './Components.js/navbar';
import AddStudent from './pages/addStudent';
import UpdateStudent from './pages/updateStudent';
import Home from './Components.js/Home';
import Dashboard from './pages/dashboard';
import { Routes } from 'react-router-dom';
import Sidebar from './Components.js/Sidebar';
function App(){
  return(
    <Router>
        <div className="App">
          <Navbar/>
        <Routes>
          <Route exact path ="/"element={<Dashboard/>}/>
          <Route path ="/Login"  element={<Login/>}/>
          <Route path ="/Register" element={<Register/>}/>
          <Route path ="/students" element={<Home/>}/>
          <Route path ="/addStudent" element={<AddStudent/>}/>
          <Route path ="/update/:id" element={<UpdateStudent/>}/>
        </Routes>  
      </div>
    </Router>
 )}

export default App
