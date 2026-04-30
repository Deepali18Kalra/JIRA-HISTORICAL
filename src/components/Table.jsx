import { useNavigate } from "react-router-dom"
import StatusBadge from "./StatusBadge"
import { UserContext } from "../UserContext"
import { useContext } from "react"

const priorityColors = {
  Highest: "text-red-600 font-semibold",
  High:    "text-orange-500 font-semibold",
  Medium:  "text-yellow-600",
  Low:     "text-blue-500",
  Lowest:  "text-gray-400",
}

export default function Table({ data }) {
  const navigate = useNavigate()
  const {loading,error} = useContext(UserContext)
  if (data.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400 text-sm">
        No issues found
      </div>
    )
  }

  if(loading) return <div className="mt-6 text-gray-500 text-sm">Loading comments...</div>
  if(error) return <div className="mt-6 text-gray-500 text-sm">Error loading comments: {error}</div>
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-28">Issue Key</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Summary</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-28">Type</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-24">Priority</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-32">Status</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-36">Assignee</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-36">Reporter</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.map((row, idx) => (
            <tr
              key={idx}
              onClick={() => navigate(`/issue/${row.issueKey}`,{
                state: {issueData: row}
              })}
              className="hover:bg-blue-50 cursor-pointer transition-colors group"
            >
              <td className="px-4 py-3 font-semibold text-[#0747a6] group-hover:underline whitespace-nowrap">
                {row.issueKey}
              </td>
              <td className="px-4 py-3 text-gray-800 max-w-sm">
                <span className="line-clamp-2">{row.summary || "—"}</span>
              </td>
              <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{row.issueType || "—"}</td>
              <td className={`px-4 py-3 whitespace-nowrap text-xs ${priorityColors[row.priority] || "text-gray-500"}`}>
                {row.priority || "—"}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <StatusBadge status={row.status} />
              </td>
              <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{row.assigneeName || "—"}</td>
              <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{row.reporterName || "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}