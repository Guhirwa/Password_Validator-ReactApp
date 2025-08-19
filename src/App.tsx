import React from "react"
import PasswordField from "./components/PasswordField"
import ChecklistItem from "./components/ChecklistItem"
import { analyzePassword, allSatisfied } from "./utils/password"

const App: React.FC = () => {
  const [pw, setPw] = React.useState("")
  const status = analyzePassword(pw)
  const valid = allSatisfied(status)

  const [createdMessage, setCreatedMessage] = React.useState<string | null>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setCreatedMessage(`Created password: "${pw}"`)
    setPw("")
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto mt-8 max-w-xl rounded-xl bg-white p-8 shadow">
        <h1 className="text-center text-3xl font-bold">Create Password</h1>
        <p className="mt-2 text-center text-gray-500">Enter a secure password</p>

        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          <PasswordField value={pw} onChange={setPw} />

          <div>
            <h2 className="font-semibold">Password Requirements</h2>
            <ul className="mt-2">
              <ChecklistItem checked={status.lengthOk}>
                At least 8 characters
              </ChecklistItem>
              <ChecklistItem checked={status.hasUpper}>
                Contains uppercase character
              </ChecklistItem>
              <ChecklistItem checked={status.hasLower}>
                Contains lowercase character
              </ChecklistItem>
              <ChecklistItem checked={status.hasDigit}>
                Contains a digit
              </ChecklistItem>
              <ChecklistItem checked={status.hasSpecial}>
                Contains a special character
              </ChecklistItem>
            </ul>
          </div>

          <button
            type="submit"
            className={[
              "w-full rounded-md px-4 py-3 font-semibold text-white",
              valid
                ? "bg-green-800 hover:bg-green-900 focus:outline-none focus:ring-2"
                : "bg-gray-400 cursor-not-allowed",
            ].join(" ")}
            disabled={!valid}
          >
            Submit
          </button>
        </form>

        {createdMessage && (
          <p
            className="mt-4 rounded-md bg-indigo-50 p-3 text-center text-indigo-700"
            role="status"
            aria-live="polite"
          >
            {createdMessage}
          </p>
        )}
      </div>
    </main>
  )
}

export default App
