export default function ProjectFilter({ value, onChange, projects = [] }) {
  return (
    <div className="flex flex-col gap-1 w-64">
      <label className="text-sm font-medium text-gray-700">
        Project
      </label>
 
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          border border-gray-300
          rounded-md
          px-3 py-2
          text-sm
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          bg-white
        "
      >
 
        <option value="">All Projects</option>
 
        {projects.map((project) => (
          <option key={project} value={project}>
            {project}
          </option>
        ))}
       
      </select>
    </div>
  );
}