import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="h-14 bg-[#0747a6] text-white flex items-center justify-between px-6 shadow-md">
      <div className="font-bold text-base tracking-tight">Jira Historical UI</div>
      <div className="flex gap-2">
        {/* <Link to="/" className="text-white text-sm px-4 py-1.5 rounded-md bg-white/10 hover:bg-white/20 transition-colors">
          Project Issues
        </Link> */}
        {/* <Link to="/users" className="text-white text-sm px-4 py-1.5 rounded-md bg-white/10 hover:bg-white/20 transition-colors">
          User Filter
        </Link> */}
      </div>
    </div>
  )
}