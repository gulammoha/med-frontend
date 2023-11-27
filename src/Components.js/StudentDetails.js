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
        axios.delete("http://localhost:4000/api/workouts/" +student._id)
        .then((res)=>{
            console.log("data has been deleted")
        })
         .catch(err=>console.log(err))
    }
  return (
     <div className="student-details">
                <h3>{student.title}</h3>
                <p><strong>Loads (kg): </strong>{student.load}</p>
                <p><strong>Reps: </strong>{student.reps}</p>
                <p>{student.createdAt}</p>
                <button onClick={updateStudent}>update</button>
                <button onClick={deleteStudent}>delete</button>
    </div>
  )
}