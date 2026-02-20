import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, content, image, authorId } = body;

    if (!title || !content || !authorId) {
      return NextResponse.json(
        { error: "Title, content and authorId are required" },
        { status: 400 },
      );
    }
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        image,
        authorId,
      },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar o post:", error);
    return NextResponse.json(
      { error: "Error ao criar o post" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: { author: true },
      orderBy: { createdAt: "desc" } as Prisma.PostOrderByWithRelationInput,
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Erro ao buscar os posts:", error);
    return NextResponse.json(
      { error: "Error ao buscar os posts" },
      { status: 500 },
    );
  }
}
