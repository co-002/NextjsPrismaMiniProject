"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { createNewSnippet } from "@/actions";
import React, { useActionState } from "react";

function createSnippet() {
  const [serverActionData, action] = useActionState(createNewSnippet, {
    message: "",
  });
  console.log(serverActionData);

  return (
    <div>
      <form action={action}>
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
        <div className="mt-5">
          {serverActionData.message.length > 0 && (
            <div className="bg-red-300 p-2 border-2 border-red-300">
              {serverActionData.message}
            </div>
          )}
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
