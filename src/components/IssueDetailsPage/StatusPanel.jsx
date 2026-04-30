import { SEVERITY_COLOR_MAP } from "../../utils/severityColors";
import { statusStyles } from "../../utils/statusStyles.js";
const StatusPanel = ({ status, severity }) => {
  const severityClasses =
    SEVERITY_COLOR_MAP[severity] ||
    "bg-gray-100 text-gray-600 border-gray-300";

    const statusStyle = statusStyles[status] || "bg-gray-100 text-gray-500";
  return (
    <section className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {/* Status */}
        <span className={`px-3 py-1 rounded text-sm font-medium border ${statusStyle}`}>
          Status : {status || "—"}
        </span>

        {/* Severity */}
        {severity && (
          <span
            className={`px-3 py-1 rounded text-sm font-medium border ${severityClasses}`}
          >
            Severity : {severity}
          </span>
        )}
      </div>
    </section>
  );
};

export default StatusPanel;