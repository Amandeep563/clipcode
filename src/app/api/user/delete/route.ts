import { db } from "@/db";
import { session, snippets, user, verification } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function DELETE() {
  const sessionData = await getSession();

  if (!sessionData) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = sessionData.user.id;

  try {
    //delete related data manually
    await db.delete(verification).where(eq(verification.identifier, userId));
    await db.delete(snippets).where(eq(snippets.id, userId));

    //delete user
    await db.delete(user).where(eq(user.id, userId));

    return NextResponse.json({ message: "User delete successfully" });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Falied to delete user",
      },
      { status: 500 },
    );
  }
}
