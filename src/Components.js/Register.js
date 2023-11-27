import { useState } from "react"

const Register = () =>{
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState ("");
    const [email,setEmail] = useState ("");
    const [password,setPassword] = useState ("");
    const handleRegister = (e)=>{
        e.preventDefault();
    }
    return(
        <form onSubmit={handleRegister}>
            <input type="text" placeholder="Enter Firstname" value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
            <br/> <br/>
            <input type="text" placeholder="Enter Lastname" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
            <br/> <br/>
            <input type="text" placeholder="Enter Email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
            <br/> <br/>
            <input type="text" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value) }/>
            <br/> <br/>
            <button  type="submit">REGISTER</button>
            </form>
    )
}
export default Register;