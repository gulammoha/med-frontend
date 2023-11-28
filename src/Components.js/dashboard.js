import Content from "./Content";
import Sidebar from "./Sidebar";

const Dashboard=()=>{
return(
    <>
        <div className="layout-container">
            <Sidebar/>
            <Content/>
        </div>
    </>
    
)
}
export default Dashboard;