"use client"
import { createSnippet } from "@/actions"
import { useFormState } from "react-dom"

export default function SnippetCreatePage() {
  const [formState, action] = useFormState(createSnippet, { msg: "" })

  return (
    <form action={action}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>

        <div className="flex flex-col gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>

        {formState.msg ? (
          <div className="text-red-600 text-xl py-2">{formState.msg}</div>
        ) : null}

        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  )
}
