import {useEffect, useState} from "react";
import axios from "axios"
import Sidebar from "../Components.js/Sidebar"
import Navbar from "../Components.js/navbar"


//components
import { StudentDetails } from "./StudentDetails";

const Home = ()=>{
    const {students, setStudents} = useState([])
    const url = "http://localhost:4000/students"
        
    useEffect(()=>{
        const getData = ()=>{
         axios.get(url)
            .then((response)=> {
                setStudents(response.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }

        getData()
    }, [])

    return (
        <div className="list">
            <Sidebar/>
          <div className="listContainer">
            <Navbar/>
             {students && students.map(student=>(
                <StudentDetails key={student._id} student={student}/>
              ))}
          </div>
        </div>
    )
}

export default Home