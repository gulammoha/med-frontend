import { useState } from "react"
import axios from "axios";

const Login = () =>{
    const [user,setUser] = useState({
        Email:"",
        Password:""
    });
    
    const handlelogin = (e)=>{
        const{name,value} =e.target;
        setUser((prev)=>{
            return{...prev,[name]:value}
        })
    }
    const handlesubmit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:4000/user",user)
        .then(res=>{
            alert("added successully")
        })
        .catch(error=>{
            console.log(error)
        })
        
    }
    return(
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder="email" name="Email" onChange={handlelogin}/>
            <br/> <br/>
            <input type="text"
             placeholder="password" name="Password" onChange={handlelogin}/>
            <br/> <br/>
            <button type="submit">LOGIN</button>
            <br/>
        </form>
    )
}
export default Login;