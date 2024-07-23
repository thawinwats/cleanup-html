import { useState } from "react"

import { CleanedHTML } from "./CleanedHTML"
import { PasteHTML } from "./PasteHTML"

export function RemoveAttributes() {
  const [cleanedHtml, setCleanedHtml] = useState("")

  return (
    <div className="grid grid-cols-2 gap-4 max-w-screen-2xl container">
      <PasteHTML setCleanedHtml={setCleanedHtml} />

      <CleanedHTML html={cleanedHtml} />
    </div>
  )
}
