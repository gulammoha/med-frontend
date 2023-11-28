import Featured from "../widgets/featured";
import Chart from "../widgets/stats";
import Widget from "../widgets/widgets";
import List from "./table";

export default function Content() {
  return (
    <div className="content">
        <div className="widgets">
            <Widget type="students"/>
            <Widget type="orders"/>
            <Widget type="subscriptions"/>
            <Widget type="balance"/>
        </div>
        <div className="charts">
            <Featured/> 
            <Chart/>
        </div>
        <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <List/>
        </div>
    </div>
  )
}