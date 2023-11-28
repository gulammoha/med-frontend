import axios from "axios"
import {useNavigate} from "react-router-dom"
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "./datatablesource";
import { Link } from "react-router-dom";


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
    const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
              <div className="viewButton"
                onClick={() => updateStudent(params.row.id)}>
                  Update
              </div>
            <div
              className="deleteButton"
              onClick={() => deleteStudent(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <div className="datatable">
      <div className="datatableTitle">
        View User
        <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={student}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
    </>
  )
}