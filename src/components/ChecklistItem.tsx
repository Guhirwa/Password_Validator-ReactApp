import React from "react"

type Props = {
  checked: boolean
  children: React.ReactNode
}

const ChecklistItem: React.FC<Props> = ({ checked, children }) => {
  return (
    <li className="flex items-center gap-3 py-1">
      <span aria-hidden="true" className={[
          "inline-flex h-5 w-5 items-center justify-center rounded-full border",
          checked ? "bg-green-800 border-none  text-white text-xl font-bold" : "border-gray-400 bg-white text-gray-400",
        ].join(" ")}
      >
        {checked ? "✓" : ""}
      </span>
      <span className={checked ? "text-gray-900" : "text-gray-500"}>
        {children}
      </span>
    </li>
  )
}

export default ChecklistItem
