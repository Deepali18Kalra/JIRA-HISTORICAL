export const dataNormalizer = (normalizedRows) => {
  const issueMap = new Map();
  return normalizedRows.map(row => ({
    issueKey: row["Issue key"] || "",
    summary: row["Summary"] || "",
    projectKey: row["Project key"] || "",
    projectName: row["Project name"] || "",
    priority: row["Priority"] || "",
    issueType: row["Issue Type"] || "",
    reporterId: row["Reporter"] || "",
    assigneeId: row["Assignee"] || "",
    reporterName: row["Reporter"] || "",
    assigneeName: row["Assignee"] || "",
    status: row["Status"] || "",
    comments: row["Comment"] || "",
    attachments: row["Attachment"] || "",
    description: row["Description"] || "",
    releaseNotes: row["Custom field (Release Note)"] || "",
    rootCause: row["Custom field (Root Cause)"] || "",
    issueReasons: row["Custom field (Issue Reason (RCA))"] || "",
    issueInList: row["Custom field (Issue in)"] || "",
    attachments: row["Attachment"] || "",
    severity: row["Custom field (Severity)"] || "",
    startDate: row["Custom field (Start date)"] || "",
    actualStartDate : row["Custom field (Actual Start Date)"] || "",
    actualEndDate : row["Custom field (Actual End Date)"] || "",
    labels : row["Labels"] || "",
    clients : row["Custom field (Client Name)"] || "",
    redmineTrackerId : row["Custom field (Redmine_Tracker_ID)"] || ""
  }))

  // normalizedRows.forEach((row) => {
  //   let issueObj = {
  //     issueKey: row["Issue key"] || "",
  //     summary: row["Summary"] || "",
  //     projectKey: row["Project key"] || "",
  //     projectName: row["Project name"] || "",
  //     priority: row["Priority"] || "",
  //     issueType: row["Issue Type"] || "",
  //     reporterId: row["Reporter"] || "",
  //     assigneeId: row["Assignee"] || "",
  //     reporterName: row["Reporter"] || "",
  //     assigneeName: row["Assignee"] || "",
  //     status: row["Status"] || "",
  //     comments: row["Comment"] || "",
  //     attachments: row["Attachment"] || "",
  //     description: row["Description"] || "",
  //     releaseNotes: row["Custom field (Release Note)"] || "",
  //     rootCause: row["Custom field (Root Cause)"] || "",
  //     issueReasons: row["Custom field (Issue Reason (RCA))"] || "",
  //     issueInList: row["Custom field (Issue in)"] || "",
  //     attachments: row["Attachment"] || "",
  //     severity: row["Custom field (Severity)"] || "",
  //     startDate: row["Custom field (Start date)"] || "",
  //     actualStartDate : row["Custom field (Actual Start Date)"] || "",
  //     actualEndDate : row["Custom field (Actual End Date)"] || "",
  //     labels : row["Labels"] || "",
  //     clients : row["Custom field (Client Name)"] || "",
  //     redmineTrackerId : row["Custom field (Redmine_Tracker_ID)"] || ""
  //   }
  //   issueMap.set(row["Issue key"],issueObj);
  // })
  // return issueMap;
};