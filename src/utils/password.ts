export type PasswordStatus = {
  lengthOk: boolean
  hasUpper: boolean
  hasLower: boolean
  hasDigit: boolean
  hasSpecial: boolean
}

const isUpper = (ch: string) => ch >= "A" && ch <= "Z"
const isLower = (ch: string) => ch >= "a" && ch <= "z"
const isDigit = (ch: string) => ch >= "0" && ch <= "9"
const isAlnum = (ch: string) => isUpper(ch) || isLower(ch) || isDigit(ch)

export function analyzePassword(pw: string): PasswordStatus {
  let hasUpper = false
  let hasLower = false
  let hasDigit = false
  let hasSpecial = false

  for (let i = 0; i < pw.length; i++) {
    const ch = pw[i]
    if (isUpper(ch)) hasUpper = true
    else if (isLower(ch)) hasLower = true
    else if (isDigit(ch)) hasDigit = true
    else if (!isAlnum(ch) && ch.trim() !== "") hasSpecial = true
  }

  return {
    lengthOk: pw.length >= 8,
    hasUpper,
    hasLower,
    hasDigit,
    hasSpecial,
  }
}

export const allSatisfied = (st: PasswordStatus) =>
  st.lengthOk && st.hasUpper && st.hasLower && st.hasDigit && st.hasSpecial
