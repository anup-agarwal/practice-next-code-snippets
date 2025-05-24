"use client"
import { snippet } from "@/interfaces/snippet"
import { Editor } from "@monaco-editor/react"
// import { useState } from "react"

const SnippetEditForm = ({ snippet }: { snippet: snippet }) => {
  // const [value, setValue] = useState<snippet>(snippet)
  return (
    <form className="w-10/12">
      <label className="my-12">
        <div className="flex flex-col gap-2">
          <span className="text-xl mr-4">Title</span>
          <input
            type="text"
            name="title"
            className="border-2 px-1"
            defaultValue={snippet.title}
          />
        </div>
      </label>
      <label className="mb-6">
        <div className="flex flex-col gap-2">
          <span className="text-xl mr-4">Snippet</span>
          <Editor
            className="h-[40vh]"
            defaultLanguage="javascript"
            theme="vs-dark"
            // value={value}
            // onChange={(val) => setValue(val ?? "")}
          />
        </div>
      </label>
    </form>
  )
}

export default SnippetEditForm
