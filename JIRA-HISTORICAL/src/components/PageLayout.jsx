export default function PageLayout({ title, children }) {
  return (
    <div className="p-6 w-full">
      <h2 className="text-lg font-bold text-[#172b4d] mb-4">{title}</h2>
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        {children}
      </div>
    </div>
  )
}