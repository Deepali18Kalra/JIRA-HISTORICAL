export default function IssueTypeFilter({
  value,
  onChange,
  issueTypes = [],
  disabled = false
}) {
  return (
    <div className="flex flex-col gap-1 w-64">
      <label className="text-sm font-medium text-gray-700">
        Issue Type
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`
          border border-gray-300
          rounded-md
          px-3 py-2
          text-sm
          bg-white
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          ${disabled ? "opacity-50 cursor-not-allowed bg-gray-100" : ""}
        `}
      >
        <option value="">All Issue Types</option>

        {issueTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}
