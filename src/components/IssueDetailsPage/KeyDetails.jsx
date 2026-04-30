import { useContext } from "react";
import { UserContext } from "../../UserContext.jsx";
import { parseJiraMarkup } from "../../utils/parseJiraMarkup";

const KeyDetails = ({ issue }) => {
    console.log(issue)
    const {userData,loading,error} = useContext(UserContext)
    if(loading) return <div className="mt-6 text-gray-500 text-sm">Loading Description...</div>
    if(error) return <div className="mt-6 text-gray-500 text-sm">Error loading description: {error}</div>
  return (
    <section className="space-y-4">
        <div>
        <h3 className="font-semibold text-gray-600">Description</h3>
        <p className="text-base text-gray-700 whitespace-pre-line hover:bg-gray-50 p-4 hover:rounded-xl">
          {parseJiraMarkup(issue?.description,userData) || "None"}
        </p>
      </div>

        <div>
            <h3 className="font-semibold text-gray-600">Release Notes</h3>
            <p className="text-base text-gray-700 whitespace-pre-line hover:bg-gray-50 hover:rounded-xl p-4">
            {issue?.releaseNotes || "None"}
            </p>
        </div>

        <div>
            <h3 className="font-semibold text-gray-600">Root Cause</h3>
            <p className="text-base text-gray-700 p-4 hover:bg-gray-50 hover:rounded-xl">
            {issue?.rootCause || "None"}
            </p>
        </div>
    </section>
  );
};

export default KeyDetails;