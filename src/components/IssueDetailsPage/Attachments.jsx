import { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import { formatDate } from "../../utils/formatDate";

const ITEMS_PER_PAGE = 4; // show 4 attachments at once
const DownloadIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M12 3v12" />
    <path d="M7 10l5 5 5-5" />
    <path d="M5 21h14" />
  </svg>
);

const Attachments = ({ attachments = [] }) => {
  const { userData, loading, error } = useContext(UserContext);

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);

  if (loading)
    return (
      <div className="mt-6 text-gray-500 text-sm">
        Loading attachments...
      </div>
    );

  if (error)
    return (
      <div className="mt-6 text-gray-500 text-sm">
        Error loading attachments: {error}
      </div>
    );

  if (!attachments.length) {
    return (
      <section>
        <p className="text-sm text-gray-500">No attachments available</p>
      </section>
    );
  }

  // pagination calculations
  const totalPages = Math.ceil(attachments.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedAttachments = attachments.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section>
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-light">
            <tr>
              <th className="px-4 py-2 font-medium">Attached by</th>
              <th className="px-4 py-2 font-medium">Attachment name</th>
              <th className="px-4 py-2 font-medium">Date added</th>
              <th className="px-4 py-2 text-center"></th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {paginatedAttachments.map((att) => (
              <tr key={att.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-gray-700">
                  {userData.get(att.userId) || "—"}
                </td>

                <td className="px-4 py-2 text-blue-800 truncate max-w-xs">
                  {att.fileName}
                </td>

                <td className="px-4 py-2 text-gray-800">
                  {formatDate(att.time)}
                </td>

                <td className="px-4 py-2">
                  <div className="flex items-center justify-center gap-3">
                    {/* Download */}
                    <a
                      title="Download"
                      href={att.fileUrl}
                      download
                      className="text-gray-500 hover:text-green-600"
                    >
                      <DownloadIcon />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <div className="flex items-center justify-between mt-3 text-sm">
        <span className="text-gray-500">
          Page {currentPage} of {totalPages}
        </span>

        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded text-gray-600 disabled:opacity-40"
          >
            Previous
          </button>

          <button
            onClick={() =>
              setCurrentPage((p) => Math.min(p + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded text-gray-600 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Attachments;