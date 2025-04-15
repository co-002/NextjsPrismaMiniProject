import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snippet.findMany();

  return (
    <div>
      <h1 className="font-bold text-4xl">Home</h1>
      <div className="flex justify-between">
        <h1>Snippet</h1>
        <Link href={"/snippet/new"}>
          <Button>New</Button>
        </Link>
      </div>
      <div className="mt-5">
        {snippets.map((snippet) => {
          return <div key={snippet.id} className="my-3 flex justify-between  p-3 align-center rounded-[15px] bg-gray-300">
            <p>{snippet.title}</p>
            <Link href={`/snippet/${snippet.id}`}><Button>View</Button></Link>
          </div>;
        })}
      </div>
    </div>
  );
}
