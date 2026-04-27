import { NavLink } from "react-router-dom"

export default function Sidebar() {
  return (
    <aside className="w-52 bg-[#f4f5f7] border-r border-gray-200 py-4 px-2 h-[calc(100vh-56px)] shrink-0">
      <Section title="General">
        <SidebarItem to="/">Project Issues</SidebarItem>
        <SidebarItem to="/users">User Filter</SidebarItem>
      </Section>
    </aside>
  )
}

function Section({ title, children }) {
  return (
    <div className="mb-4">
      <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest px-3 py-2">
        {title}
      </div>
      {children}
    </div>
  )
}

function SidebarItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-3 py-2 mx-1 my-0.5 rounded-md text-sm no-underline font-medium transition-colors ${
          isActive
            ? "bg-blue-100 text-[#0747a6]"
            : "text-[#172b4d] hover:bg-gray-200"
        }`
      }
    >
      {children}
    </NavLink>
  )
}