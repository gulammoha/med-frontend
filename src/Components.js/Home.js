import {useEffect, useState} from "react";
import axios from "axios"


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
        <div className="home">
            <div className="workout">
              {students && students.map(student=>(
                <StudentDetails key={student._id} student={student}/>
              ))}
            </div>
        </div>
    )
}

export default Home