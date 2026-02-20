import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // 1. Busca o usuário pelo e-mail
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: "E-mail ou senha inválidos" }, { status: 401 });
    }

    // 2. Compara a senha digitada com a senha do banco
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json({ error: "E-mail ou senha inválidos" }, { status: 401 });
    }

    // 3. Login bem-sucedido! 
    // Por enquanto, vamos apenas retornar os dados do usuário.
    // (No futuro, aqui você geraria um Token ou Sessão)
    return NextResponse.json({
      message: "Login realizado com sucesso!",
      user: { id: user.id, name: user.name, email: user.email }
    });

  } catch (error) {
    return NextResponse.json({ error: "Erro no servidor" }, { status: 500 });
  }
}