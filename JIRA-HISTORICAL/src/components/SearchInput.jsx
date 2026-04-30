export default function SearchInput({ value, onChange }) {
  return (
    <div className="p-4 border-b border-gray-100">
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
        </svg>
        <input
          value={value}
          onChange={onChange}
          placeholder="Search by issue key, summary, reporter or assignee..."
          className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-700 placeholder-gray-400"
        />
      </div>
    </div>
  )
}