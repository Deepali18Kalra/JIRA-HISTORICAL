import { useState } from "react";
import { LabelsField } from "./LabelsField";
import IssueInField from "./IssueInField";
import ClientsField from "./ClientsField";
import { IssueReasonRCA } from "./IssueReasonRCA";
import { formatDate } from "../../utils/formatDate";
import { priorityColors } from "../../utils/priorityColors";
const MetaField = ({ label, value,style="" }) => (
    <div className="space-y-0.5">
      <p className="text-xs font-semibold text-gray-500 uppercase">
        {label}
      </p>
      <p className={`text-sm ${style}`}>
        {value || "None"}
      </p>
    </div>
);

const MetaItemWrapper = ({ children }) => (
  <div className="w-full sm:w-[48%]">
    {children}
  </div>
);

const IssueMetaDetails = ({ issue }) => {
  const [isOpen, setIsOpen] = useState(true);

  const labels = issue.labels.filter((label)=>label);
  const issueInList = issue.issueInList.filter((issueIn)=>issueIn);
  const clients = issue.clients.filter((client)=>client);
  const issueReasons = issue.issueReasons.filter((issueReason)=>issueReason)
  return (
    <section className="border rounded-md p-4 bg-white">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center mb-3"
      >
        <h3 className="text-xs font-bold text-gray-500 uppercase">
          Details
        </h3>
        <span className="text-gray-400 text-sm">
          {isOpen ? "v" : ">"}
        </span>
      </button>

      {/* Collapsible content */}
      {isOpen && (
        <div className="w-full flex flex-col gap-4">
          <MetaItemWrapper>
            <MetaField label="Reporter" value={issue?.reporterName} />
          </MetaItemWrapper>

          <MetaItemWrapper>
            <MetaField label="Assignee" value={issue?.assigneeName} />
          </MetaItemWrapper>

          <MetaItemWrapper>
            <MetaField label="Start Date" value={formatDate(issue?.startDate)} />
          </MetaItemWrapper>

          <MetaItemWrapper>
            <MetaField label="Actual Start Date" value={formatDate(issue?.actualStartDate)} />
          </MetaItemWrapper>

          <MetaItemWrapper>
            <MetaField label="Actual End Date" value={formatDate(issue?.actualEndDate)} />
          </MetaItemWrapper>

          <MetaItemWrapper>
            <LabelsField labels={labels} />
          </MetaItemWrapper>

          <MetaItemWrapper>
            <IssueInField issueIn={issueInList} />
          </MetaItemWrapper>

          <MetaItemWrapper>
            <ClientsField clients={clients} />
          </MetaItemWrapper>

          <MetaItemWrapper>
            <IssueReasonRCA issueReasons={issueReasons} />
          </MetaItemWrapper>

          <MetaItemWrapper>
            <MetaField
              label="Priority"
              value={issue?.priority}
              style={`${priorityColors[issue.priority] || "text-gray-800"} font-medium`}
            />
          </MetaItemWrapper>

          <MetaItemWrapper>
            <MetaField
              label="Redmine Tracker ID"
              value={issue?.redmineTrackerId}
            />
          </MetaItemWrapper>

          {/* <MetaItemWrapper>
            
          </MetaItemWrapper> */}
        </div>
      )}
    </section>
  );
};

export default IssueMetaDetails;
