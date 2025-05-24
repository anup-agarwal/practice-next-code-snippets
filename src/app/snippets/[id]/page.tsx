import SnippetEditForm from "@/components/SnippetEditForm"
import { getSnippetByID } from "@/db"
import { snippet } from "@/interfaces/snippet"
import { notFound } from "next/navigation"

export const metadata = {
  title: "Create snippet",
  description: "Add new snippet",
}

const EditSnippetPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params
  let snippet: snippet | null = null
  try {
    snippet = (await getSnippetByID(id)) as snippet
  } catch (error) {
    console.log(error)
  }

  if (!snippet) return notFound()
  return (
    <>
      <div className="flex justify-between items-center mb-16 h-10">
        <h2 className="text-3xl">Update Snippets : {id}</h2>
        <div className="flex gap-4">
          <button className="text-2xl border-2 px-4 py-2">Edit</button>
          <button className="text-2xl border-2 px-4 py-2">Delete</button>
        </div>
      </div>
      <SnippetEditForm snippet={snippet} />
    </>
  )
}

export default EditSnippetPage
