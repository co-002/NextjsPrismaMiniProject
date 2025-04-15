"use server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const saveSnippet = async (id: number, code: string) => {
  await prisma.snippet.update({
    where: {
      id,
    },
    data: {
      code,
    },
  });
  redirect(`/snippet/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await prisma.snippet.delete({
    where: {
      id,
    },
  });
  redirect("/");
};

export async function createNewSnippet(
  prevState: { message: string },
  formData: FormData
) {
  try {
    const title = formData.get("title");
    const code = formData.get("code");
    if (typeof title !== "string" || title.length <= 0) {
      return {
        message: "Title is required",
      };
    }
   
    if (typeof code !== "string" || code.length <= 0) {
      return {
        message: "Code is required",
      };
    }
    await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (error: any) {
    return { message: error.message };
  }
  redirect("/");
}
