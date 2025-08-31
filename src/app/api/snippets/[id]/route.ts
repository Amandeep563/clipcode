import { db } from "@/db";
import { snippets } from "@/db/schema";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    // Await the params Promise to get the actual params object
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const result = await db.select().from(snippets).where(eq(snippets.id, id));

    if (result.length === 0) {
      return NextResponse.json({ error: "Snippet not found" }, { status: 404 });
    }

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
