import React from "react";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

export const experimental_ppr = true;

const DetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params)?.id;

  const post = await client.fetch(STARTUP_QUERY, { id });
  console.log(post);

  if (!post) return notFound();

  return (
    <>
      <h1 className="text-3xl">{post.title}</h1>
    </>
  );
};

export default DetailsPage;
