import EditorWrapper from "@/app/components/EditorWrapper"

export const metadata = {
  title: "Create snippet",
  description: "Add new snippet",
}

const EditSnippetPage = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-16 h-10">
        <h2 className="text-3xl">Update Snippets : {id}</h2>
      </div>
      <form className="w-10/12">
        <label className="my-12">
          <div className="flex flex-col gap-2">
            <span className="text-xl mr-4">Title</span>
            <input type="text" name="title" className="border-2 px-1" />
          </div>
        </label>
        <label className="mb-6">
          <div className="flex flex-col gap-2">
            <span className="text-xl mr-4">Snippet</span>
            <EditorWrapper />
          </div>
        </label>
      </form>
    </>
  )
}

export default EditSnippetPage
