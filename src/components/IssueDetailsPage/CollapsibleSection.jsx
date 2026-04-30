import { useState } from "react";

const CollapsibleSection = ({ title, children, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-md">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-2 bg-gray-50 hover:bg-gray-100"
      >
        <span className="font-semibold text-gray-800">{title}</span>
        <span className="text-gray-600 text-sm">
          {open ? "⌄" : "›"}
        </span>
      </button>

      {/* Content */}
      {open && (
        <div className="px-4 py-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsibleSection;