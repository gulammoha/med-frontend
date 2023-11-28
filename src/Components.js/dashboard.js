import Content from "./Content";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";

const Dashboard=()=>{
return(
    <>
        <div className="layout-container">
            <Sidebar/>
            <Content/>
            <Rightbar/>
        </div>
    </>
    
)
}
export default Dashboard;