import Content from "../Components.js/Content";
import Sidebar from "../Components.js/Sidebar";

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