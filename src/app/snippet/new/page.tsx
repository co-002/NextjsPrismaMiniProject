import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

function createSnippet() {
  async function createNewSnippet(formData: FormData) {
    "use server"
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    const res = await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(res);
    redirect("/");
  }

  return (
    <div>
      <form action={createNewSnippet}>
        <h1 className="font-bold text-4xl">Snippet</h1>
        <div>
          <Label htmlFor="title" className="my-3 text-1xl">
            Title
          </Label>
          <Input type="text" name="title" id="title" />
        </div>
        <div className="mt-5">
          <Label htmlFor="code" className="my-3 text-1xl">
            Code
          </Label>
          <Textarea name="code" id="code" />
        </div>
        <div>
          <Button className="my-5" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default createSnippet;
