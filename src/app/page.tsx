import Link from "next/link"
// import { getSnippets } from "./db"

export const metadata = {
  title: "List of snippets",
  description: "These are the list of snippets that are added here",
}

const HomePage = async () => {
  // const snippets = await getSnippets()
  // console.log(snippets)
  return (
    <>
      <div className="flex justify-between items-center mb-16 h-10">
        <h2 className="text-3xl">All Snippets</h2>
        <Link href="/snippets/new" className="text-2xl border-2 px-4 py-2">
          New
        </Link>
      </div>
      <div>I am the list</div>
    </>
  )
}

export default HomePage
