import React from "react";
import { useLocation, useParams } from "react-router-dom";
import LeftPanel from "../components/IssueDetailsPage/LeftPanel";
import RightPanel from "../components/IssueDetailsPage/RightPanel";
import Navbar from "../components/Navbar";

const IssueDetails = () => {
  const { key } = useParams();
  const location = useLocation();
  const issueData = location.state?.issueData;

  const comments = [];

  issueData?.comments?.forEach(comment => {
    if (!comment) return;
    const [time, userId, commentString] = comment.split(";");
    comments.push({ time, userId, commentString });
  });

  comments.sort((a, b) => new Date(b.time) - new Date(a.time));

  const attachments = [];
  issueData?.attachments?.forEach(attachment => {
    if (!attachment) return;
    const[time, userId, fileName, fileUrl] = attachment.split(";");
    attachments.push({ time, userId, fileName, fileUrl });
  });

  attachments.sort((a, b) => new Date(b.time) - new Date(a.time));
  return (
    <>
    <Navbar/>
    <div className="h-screen w-full bg-gray-50 p-4">
      <div className="grid grid-cols-12 gap-4 h-full">
        <LeftPanel issue={issueData} comments={comments} attachments={attachments} />
        <RightPanel issue={issueData} />
      </div>
    </div>
    </>
  );
};

export default IssueDetails;