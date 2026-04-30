export const IssueReasonRCA = ({ issueReasons = [] }) => {
const values = Array.isArray(issueReasons) ? issueReasons : [issueReasons];

  return (
    <div>
      <p className="text-xs font-semibold uppercase text-gray-500 mb-2">
        Issue Reason (RCA)
      </p>

      <div className="flex flex-wrap gap-2">
        {values.length===0 && (
            <span className="text-gray-700">None</span>
        )}
        {values.map((item, index) => (
          <span
            key={index}
            className="px-2 py-0.5 text-xs text-gray-700
                       border border-gray-300 rounded-md
                       bg-white"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default IssueReasonRCA;