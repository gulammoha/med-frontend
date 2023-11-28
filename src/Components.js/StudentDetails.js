import axios from "axios"
import {useNavigate} from "react-router-dom"


export const StudentDetails = ({student}) => {
    const navigate = useNavigate();
    const updateStudent = (e)=>{
        e.preventDefault()
        navigate(`/update/${student._id}`)
    }
    const deleteStudent = async (e)=>{
        e.preventDefault()
        axios.delete("http://localhost:4000/students/" +student._id)
        .then((res)=>{
            console.log("data has been deleted")
        })
         .catch(err=>console.log(err))
    }
  return (
    <>
       <div className="student-details">
                <h3>{student.gender}</h3>
                <p><strong>First Name: </strong>{student.firstname}</p>
                <p><strong>Last Name: </strong>{student.lastname}</p>
                <p>{student.createdAt}</p>
                <button onClick={updateStudent}>update</button>
                <button onClick={deleteStudent}>delete</button>
    </div>
    </>
  )
}