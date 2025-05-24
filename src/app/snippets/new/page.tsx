import { createSnippetAction } from "@/actions/create-snippet-action"

export const metadata = {
  title: "Create snippet",
  description: "Add new snippet",
}

const CreateSnippetPage = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4 h-10">
        <h2 className="text-3xl">Create Snippets</h2>
      </div>
      <form className="m-auto flex flex-col gap-3" action={createSnippetAction}>
        <label>
          <div className="flex flex-col gap-2">
            <span className="text-xl">Title</span>
            <input type="text" name="title" className="border-2 px-1" />
          </div>
        </label>
        <label className="mb-2">
          <div className="flex flex-col gap-2">
            <span className="text-xl">Snippet</span>
            <textarea
              name="code"
              id=""
              className="border-2 pt-1 mb-6"
              rows={13}
            ></textarea>
          </div>
        </label>
        <button
          type="submit"
          className="bg-blue-500 py-2 text-white rounded-lg"
        >
          Create Snippet
        </button>
      </form>
    </>
  )
}

export default CreateSnippetPage
