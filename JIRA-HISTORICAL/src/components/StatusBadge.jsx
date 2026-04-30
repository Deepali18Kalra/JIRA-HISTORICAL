
const statusStyles = {
  // Completed / Success
  "Done": "bg-green-100 text-green-800",
  "Closed": "bg-green-100 text-green-800",
  "Released": "bg-green-100 text-green-800",
  "Verified In Release": "bg-green-100 text-green-800",
  "QA Passed": "bg-green-100 text-green-800",
  "Project Approved": "bg-green-100 text-green-800",
  "Requirement Approved": "bg-green-100 text-green-800",

  // In Progress / Active
  "In Progress": "bg-blue-100 text-blue-800",
  "In Dev": "bg-blue-100 text-blue-800",
  "In QA": "bg-blue-100 text-blue-800",
  "Code Review": "bg-blue-100 text-blue-800",
  "Script Development": "bg-blue-100 text-blue-800",
  "Script Review": "bg-blue-100 text-blue-800",
  "Test Design": "bg-blue-100 text-blue-800",
  "Verification": "bg-blue-100 text-blue-800",
  "V&V": "bg-blue-100 text-blue-800",

  // Pending / Waiting
  "Open": "bg-yellow-100 text-yellow-800",
  "To Do": "bg-yellow-100 text-yellow-800",
  "Planning": "bg-yellow-100 text-yellow-800",
  "Waiting on Business": "bg-yellow-100 text-yellow-800",
  "Responded": "bg-yellow-100 text-yellow-800",

  // Special workflow states
  "On Hold": "bg-orange-100 text-orange-800",
  "Rel Build Req": "bg-orange-100 text-orange-800",
  "Rel Req Approved": "bg-orange-100 text-orange-800",
  "Rel Req Raised": "bg-orange-100 text-orange-800",
  "Release Sent": "bg-orange-100 text-orange-800",
  "Upload to Production": "bg-orange-100 text-orange-800",

  // Neutral / Informational
  "Requirement": "bg-gray-100 text-gray-700",
  "Review By Architect": "bg-gray-100 text-gray-700",
  "Not An Issue": "bg-gray-100 text-gray-700",

  // Negative / Cancelled
  "Cancelled": "bg-red-100 text-red-800",
};

export default function StatusBadge({ status }) {
  const style = statusStyles[status] || "bg-gray-100 text-gray-500"
  return (
    <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${style}`}>
      {status || "—"}
    </span>
  )
}