import StatusPanel from "./StatusPanel";
import IssueMetaDetails from "./IssueMetaDetails";

const RightPanel = ({ issue }) => {
  return (
    <div className="col-span-3 bg-white rounded-lg shadow p-4 overflow-y-auto space-y-6">
      <StatusPanel status={issue?.status} severity={issue?.severity}/>
      <IssueMetaDetails issue={issue} />
    </div>
  );
};

export default RightPanel;
