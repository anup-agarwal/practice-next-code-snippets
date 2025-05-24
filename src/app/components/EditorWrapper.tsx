"use client"
import { Editor } from "@monaco-editor/react"
import { useState } from "react"

const EditorWrapper = () => {
  const [value, setValue] = useState<string>("")
  return (
    <Editor
      defaultLanguage="javascript"
      value={value}
      onChange={(val) => setValue(val ?? "")}
    />
  )
}

export default EditorWrapper
