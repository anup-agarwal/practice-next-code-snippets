"use server"

import { redirect } from "next/navigation"
import { db } from "@/db"
import { revalidatePath } from "next/cache"

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  })
  revalidatePath(`/snippets/${id}`)
  redirect(`/snippets/${id}`)
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  })
  revalidatePath("/")
  redirect("/")
}

export async function createSnippet(
  formaState: { msg: string },
  formData: FormData
) {
  const title = formData.get("title")
  const code = formData.get("code")

  if (typeof title !== "string" || title.length < 3) {
    return { msg: "Title must be longer" }
  }
  if (typeof code !== "string" || title.length < 10) {
    return { msg: "Code must be longer" }
  }

  await db.snippet.create({
    data: {
      title,
      code,
    },
  })
  revalidatePath("/")
  redirect("/")
}
