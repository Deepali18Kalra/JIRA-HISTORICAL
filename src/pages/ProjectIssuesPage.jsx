import { useContext, useEffect, useState } from "react"
import PageLayout from "../components/PageLayout"
import SearchInput from "../components/SearchInput"
import Table from "../components/Table"
import Pagination from "../components/Pagination"
import { parseCSV } from "../utils/csvParser"
import { dataNormalizer } from "../utils/dataNormalizer"
import Navbar from "../components/Navbar"
import IssueTypeFilter from "../components/IssueTypeFilter"
import { userIdMapper } from "../utils/userIdMapper"
import ProjectFilter from "../components/ProjectFilter"
import { normalizeRowsWithRepeatedHeaders } from "../utils/normalizeRowsWithRepeatedHeaders"
import { UserContext } from "../UserContext"

const PAGE_SIZE = 20

export default function ProjectIssuesPage() {
  // const [issues, setIssues] = useState([]);
  const {issues} = useContext(UserContext);
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedIssueType, setSelectedIssueType] = useState("");
  const [page, setPage] = useState(1)

  const filteredIssues = issues.filter((issue) => {
    const projectMatch =
      !selectedProject || issue.projectKey === selectedProject;
    const issueTypeMatch =
      !selectedIssueType || issue.issueType === selectedIssueType;
    return projectMatch && issueTypeMatch;
  });

  const totalPages = Math.ceil(filteredIssues.length / PAGE_SIZE);
  const startIndex = (page - 1) * PAGE_SIZE;
  const paginatedIssues = filteredIssues.slice(
    startIndex,
    startIndex + PAGE_SIZE
  );
  const paginated = filteredIssues.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  )

  return (
    <>
    <Navbar></Navbar>
    <PageLayout title="Project Issues">
      <div className="flex gap-4 mb-4">
  <ProjectFilter
    value={selectedProject}
    onChange={(val) => {
      setSelectedProject(val);
      setCurrentPage(1);
    }}
    projects={[
      ...new Set(
        issues
          .map((i) => i.projectKey)
          .filter((v) => v && v !== "-")
      ),
    ]}
  />
 
  <IssueTypeFilter
    value={selectedIssueType}
    onChange={(val) => {
      setSelectedIssueType(val);
      setCurrentPage(1);
    }}
    issueTypes={[
      ...new Set(
        issues
          .map((i) => i.issueType)
          .filter((v) => v && v !== "-")
      ),
    ]}
  />
</div>
      <Table data={paginated} />
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={Math.ceil(filteredIssues.length / PAGE_SIZE)}
      />
    </PageLayout>
    </>
  )
}