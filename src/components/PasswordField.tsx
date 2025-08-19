import React from "react"
import visibleOnImg from '/src/assets/images/Visibility_On.svg'
import visibleOffImg from '/src/assets/images/Visibility_Off.svg'

type Props = {
  value: string
  onChange: (v: string) => void
}

const PasswordField: React.FC<Props> = ({ value, onChange }) => {
  const [visible, setVisible] = React.useState(false)

  return (
    <div className="relative">
      <input
        type={visible ? "text" : "password"}
        className="w-full rounded-md border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-gray-500"
        placeholder="Enter your password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Enter your password"
      />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        aria-pressed={visible}
        aria-label={visible ? "Hide password" : "Show password"}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border-none px-2 py-1 text-gray-500 hover:text-gray-700 focus:outline-none"
        title={visible ? "Hide" : "Show"}
      >
        {visible ? <img src={visibleOffImg} alt="visibility off image" /> : <img src={visibleOnImg} alt="visibility off image" />}
      </button>
    </div>
  )
}

export default PasswordField
