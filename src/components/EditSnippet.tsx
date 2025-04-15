"use client";
import { Editor } from "@monaco-editor/react";
import { Snippet } from "@prisma/client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { saveSnippet } from "@/actions/index";

function EditSnippet({ snippet }: { snippet: Snippet }) {
  const [code, setCode] = useState(snippet.code);
  const handleChange = (value: string = "") => {
    setCode(value);
  };
  const saveSnippetAction = saveSnippet.bind(null, snippet.id, code);
  return (
    <div>
      <div className="flex justify-between mb-5">
        <h1 className="font-bold text-3xl">Edit your code here: </h1>
        <form action={saveSnippetAction}>
          <Button type="submit">Save</Button>
        </form>
      </div>
      <div>
        <Editor
          height="40vh"
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue={code}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default EditSnippet;
