import { Routes, Route } from 'react-router-dom'
import IssueDetails from './pages/IssueDetails.jsx'
import ProjectIssuesPage from './pages/ProjectIssuesPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ProjectIssuesPage />} />
      <Route path="/issue/:key" element={<IssueDetails />} />
    </Routes>
  )
}