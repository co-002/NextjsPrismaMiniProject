import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import * as actions from "@/actions"
import Link from "next/link";
import React from "react";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const id = parseInt((await params).id);
  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });
  if (!snippet) {
    return <h1>Snippet not found</h1>;
  }

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id)

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl">{snippet.title}</h1>
        <div className="flex">
          <Link href={`/snippet/${snippet.id}/edit`}>
            <Button className="mx-2">Edit</Button>
          </Link>
          <form action={deleteSnippetAction}>
            <Button className="mx-2" type="submit">Delete</Button>
          </form>
          <Link href={"/"}>
            <Button className="mx-2">Go Home</Button>
          </Link>
        </div>
      </div>
      <div>
        <pre className="bg-gray-300 p-3 mt-3 rounded-[15px]">
          {snippet.code}
        </pre>
      </div>
    </div>
  );
}

export default page;
