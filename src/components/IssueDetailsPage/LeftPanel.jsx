import { useNavigate } from "react-router-dom";
import Attachments from "./Attachments";
import CollapsibleSection from "./CollapsibleSection";
import Comments from "./Comments";
import KeyDetails from "./KeyDetails";


const LeftPanel = ({ issue, comments, attachments}) => {
  const navigate = useNavigate()
  return (
    <div className="col-span-9 bg-white rounded-lg shadow p-6 overflow-y-auto space-y-6">

      {/*Back to Home Page*/}
      <button
        onClick={() => navigate("/")}
        className="text-sm text-blue-800 font-medium hover:underline"
      >
       ← Back To Issues
      </button>

      {/* Breadcrumb / Issue header */}
      <div className="text-sm text-gray-700 font-medium">
        {issue?.projectName} {"("} {issue?.projectKey} {")"} / {issue?.issueType} :{" "}
        <span className="text-blue-900 font-semibold">
          {issue?.issueKey}
        </span>
      </div>

      {/* Summary */}
      <h1 className="text-2xl font-semibold text-gray-900">
        {issue?.summary}
      </h1>

      {/* Collapsible Sections */}
      <div className="space-y-4">
        <CollapsibleSection title="Key Details">
          <KeyDetails issue={issue} />
        </CollapsibleSection>

        <CollapsibleSection title="Attachments" defaultOpen={false}>
          <Attachments attachments={attachments} />
        </CollapsibleSection>

        <CollapsibleSection title="Comments">
          <Comments comments={comments} />
        </CollapsibleSection>
      </div>
    </div>
  );
};

export default LeftPanel;