export const LabelsField = ({ labels = [] }) => {
  return (
    <div>
      <p className="text-xs font-semibold uppercase text-gray-500 mb-2">
        Labels
      </p>

      <div className="flex flex-wrap gap-2">
        {labels.length===0 && (
            <span className="text-gray-700">None</span>
        )}
        {labels.map((label, index) => (
          <span
            key={index}
            className="px-2 py-0.5 text-xs text-gray-700 
                       border border-gray-300 rounded-md
                       bg-white"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};