import axios from "axios";
import { useState } from "react";

function addStudent(){
    const [user,setUser] = useState({
        firstname:"",
        lastname:"",
        gender:""
    })
    const handlechange =(e)=>{
        const{name,value}=e.target;
        setUser((prev)=>{
            return {...prev,[name]:value}
        })
    }
    const handlesubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/students",user)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>console.log(err.message))
    }
    return(
        <form onSubmit={handlesubmit} className="formdata>">
            <div className="formGroup">
                <label>firstname</label>
                <input type="text" placeholder="Enter your email"name="firstname" onChange={handlechange}/>
            </div>
            <div className="formGroup">
                <label>lastname</label>
                <input type="text" placeholder="Enter your email"name="lastname" onChange={handlechange}/>
            </div>
            <div className="formGroup">
                <label>gender</label>
                <input type="text" placeholder="Enter your email"name="gender" onChange={handlechange}/>
            </div>
            < button type="submit">SUBMIT</button>
        </form>
    )
}
export default addStudent;