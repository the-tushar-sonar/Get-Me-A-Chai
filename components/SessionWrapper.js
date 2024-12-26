import { SessionProvider } from "next-auth/react"

export default function SessionWrapper({chlderen}) {
  return (
    <SessionProvider>
      {chlderen}
    </SessionProvider>
  )
}
