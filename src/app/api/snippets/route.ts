import { db } from "@/db";
import { snippets } from "@/db/schema";
import { NextResponse } from "next/server";

// Fix duplicate GET function declarations by renaming the second one
// The second GET function should be renamed to handle the dynamic route

export async function GET() {
  try {
    const result = await db.select().from(snippets);
    return NextResponse.json({ success: true, snippets: result });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, code, language } = body;

    if (!title || !code || !language) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const result = await db
      .insert(snippets)
      .values({
        id: crypto.randomUUID(),
        title,
        code,
        language,
      })
      .returning();

    return NextResponse.json({ success: true, snippet: result[0] });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
