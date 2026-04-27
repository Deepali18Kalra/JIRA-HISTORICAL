export const dataNormalizer = (rows) => {
  return rows.map(row => ({
    issueKey: row["Issue key"] || "",
    summary: row["Summary"] || "",
    projectKey: row["Project key"] || "",
    priority: row["Priority"] || "",
    issueType: row["Issue Type"] || "",
    reporterId: row["Reporter"] || "",
    assigneeId: row["Assignee"] || "",
    reporterName: row["Reporter"] || "",
    assigneeName: row["Assignee"] || "",
    status: row["Status"] || "",
}))};