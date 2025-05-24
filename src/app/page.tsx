import Link from "next/link"
import { getSnippets } from "@/db"
import { snippet } from "@/interfaces/snippet"

export const metadata = {
  title: "List of snippets",
  description: "These are the list of snippets that are added here",
}

const HomePage = async () => {
  let snippets: snippet[] = []
  try {
    snippets = (await getSnippets()) as snippet[]
  } catch (error) {
    console.log(error)
  }
  return (
    <>
      <div className="flex justify-between items-center mb-16 h-10">
        <h2 className="text-3xl">All Snippets</h2>
        <Link href="/snippets/new" className="text-2xl border-2 px-4 py-2">
          New
        </Link>
      </div>
      {snippets.map(({ title, id }) => {
        return (
          <ul key={id}>
            <Link href={`/snippets/${id}`}>
              <li className="border-2 h-12 flex items-center pl-6 mb-6 text-xl">
                {title}
              </li>
            </Link>
          </ul>
        )
      })}
    </>
  )
}

export default HomePage
