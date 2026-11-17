import { Link } from 'react-router-dom'

export default function Breadcrumbs({ items = [] }) {
  if (!items.length) return null

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-body">
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={item.path || item.name} className="flex items-center gap-2">
              {i > 0 && <span className="text-line">/</span>}
              {last || !item.path ? (
                <span className="font-medium text-heading" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link to={item.path} className="hover:text-brand-600">
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
