import { PrismaClient } from "@prisma/client"

export const db = new PrismaClient()

export const createSnippet = async (title: string, code: string) => {
  try {
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    })
    console.log(snippet)
  } catch (error) {
    console.log(error)
  }
}

export const getSnippets = async () => {
  try {
    const snippet = await db.snippet.findMany()
    return snippet
  } catch (error) {
    console.log(error)
  }
}

export const getSnippetByID = async (id: string) => {
  try {
    const snippet = await db.snippet.findUnique({ where: { id: parseInt(id) } })
    return snippet
  } catch (error) {
    console.log(error)
  }
}
