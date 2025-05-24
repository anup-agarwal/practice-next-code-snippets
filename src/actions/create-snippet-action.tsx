"use server"

import { redirect } from "next/navigation"
import { createSnippet } from "../db"

export const createSnippetAction = async (formData: FormData) => {
  const title = formData.get("title") as string
  const code = formData.get("code") as string
  await createSnippet(title, code)
  redirect("/")
}
