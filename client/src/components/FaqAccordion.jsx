import { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'

export default function FaqAccordion({ items = [] }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-base font-semibold text-heading sm:text-lg">{item.q}</span>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-brand-200 bg-brand-50 text-brand-600">
                {isOpen ? <FiMinus size={16} /> : <FiPlus size={16} />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <p className="overflow-hidden text-sm leading-relaxed text-body sm:text-base">{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
