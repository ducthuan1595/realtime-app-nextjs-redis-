import Button from "@/components/ui/Button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { FC } from "react";

async function page() {
  const session = await getServerSession(authOptions);
  return <pre>{JSON.stringify(session)}</pre>;
}

export default page;
