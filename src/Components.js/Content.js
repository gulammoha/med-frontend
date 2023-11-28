import Widget from "../widgets/widgets";

export default function Content() {
  return (
    <div className="content">
        <div className="widgets">
            <Widget type="students"/>
            <Widget type="orders"/>
            <Widget type="subscriptions"/>
            <Widget type="balance"/>
        </div>
    </div>
  )
}