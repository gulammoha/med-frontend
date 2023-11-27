import axios from "axios";
import { useEffect, useState } from "react";

const Vendors=()=>{
    const[vendor,setVendor]=useState([])
    const[name,setName]=useState('')
    const [phone,setPhone]=useState('')
    useEffect(()=>{
        loadVendors();    
    },[])
    const loadVendors=async()=>{
        const result=await axios.get('/vendors')
        setVendor(result.data)
    }
    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("/vendors",{name,phone})
        .then((res)=>console.log(res))
    }
    const deleteVendors=async(id)=>{
        await  axios.delete(`/vendors/${id}`)
    }
    return(
        <div className="vend">
    <h1>Vendors</h1>
    <form onSubmit={onSubmit}>
      
      <input type='text' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
      <br></br>
      <input type='text' placeholder='Phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
      <br></br>
      <button type='submit'>ADD VENDOR</button>
      </form>
      <table border='2px solid black'>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PHONE NUMBER</th>
               
                </tr>
        </thead>
        <tbody>
            {Vendors.map((vendor)=>{

return (<tr key={vendor._id}>
    <td>{vendor.name}</td>
    <td>{vendor.phone}</td>
    <td><button onClick={()=>deleteVendors(vendor._id)}>DELETE</button></td>
    </tr>)
    })
    }       
        </tbody>
      </table>
  
    </div>
    )
}
export default Vendors;