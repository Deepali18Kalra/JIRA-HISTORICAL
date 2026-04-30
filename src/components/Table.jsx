import { useNavigate } from "react-router-dom";
import StatusBadge from "./StatusBadge";

const priorityColors = {
  Highest: "text-red-600 font-semibold",
  High: "text-orange-500 font-semibold",
  Medium: "text-yellow-600",
  Low: "text-blue-500",
  Lowest: "text-gray-400",
};

/* ---------- HIGHLIGHT HELPER ---------- */
function highlightText(text, query) {
  if (!query || !text) return text;

  const regex = new RegExp(`(${query})`, "gi");
  return text.split(regex).map((part, idx) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark
        key={idx}
        className="bg-yellow-100 rounded px-0.5"
      >
        {part}
      </mark>
    ) : (
      part
    )
  );
}

export default function Table({ data, searchQuery, emptyMessage, issueTypeSortOrder, onTypeHeaderClick }) {
  const navigate = useNavigate();

  if (data.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400 text-sm">
        {emptyMessage || "No issues found"}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase w-28">
              Issue Key
            </th>
            <th
              onClick={onTypeHeaderClick}
              className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase w-28 cursor-pointer select-none"
            >
              <div className="inline-flex items-center gap-1">
                <span>Type</span>
                <span className="text-xs text-gray-400">
                  {issueTypeSortOrder === "asc"
                    ? "↑"
                    : issueTypeSortOrder === "desc"
                    ? "↓"
                    : "↕"}
                </span>
              </div>
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
              Summary
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase w-24">
              Priority
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase w-32">
              Status
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase w-36">
              Assignee
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase w-36">
              Reporter
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {data.map((row, idx) => (
            <tr
              key={idx}
              onClick={() => navigate(`/issue/${row.issueKey}`)}
              className="hover:bg-blue-50 cursor-pointer transition-colors group"
            >
              <td className="px-4 py-3 font-semibold text-[#0747a6] group-hover:underline">
                {row.issueKey}
              </td>

              <td className="px-4 py-3 text-gray-600">
                {row.issueType || "—"}
              </td>

              <td className="px-4 py-3 text-gray-800 max-w-sm">
                <span className="line-clamp-2">
                  {highlightText(row.summary || "—", searchQuery)}
                </span>
              </td>

              <td
                className={`px-4 py-3 text-xs ${
                  priorityColors[row.priority] || "text-gray-500"
                }`}
              >
                {row.priority || "—"}
              </td>

              <td className="px-4 py-3">
                <StatusBadge status={row.status} />
              </td>

              <td className="px-4 py-3 text-gray-600">
                {row.assigneeName || "—"}
              </td>

              <td className="px-4 py-3 text-gray-600">
                {row.reporterName || "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}