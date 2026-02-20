import { prisma } from "@/lib/prisma"; // Verifique se o caminho da sua Lib está correto
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    // 1. Pega os dados do body
    const body = await request.json();
    const { name, email, password } = body;

    // 2. Validação básica
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Dados insuficientes" },
        { status: 400 }
      );
    }

    // 3. Verifica se o usuário já existe
    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      return NextResponse.json(
        { error: "Este e-mail já está em uso" },
        { status: 400 }
      );
    }

    // 4. Criptografa a senha (Segurança é tudo!)
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5. Salva no MongoDB
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "Usuário criado com sucesso!", userId: user.id },
      { status: 201 }
    );

  } catch (error: any) {
    console.error("ERRO NO REGISTRO:", error);
    
    // Se o erro for no Prisma, ele detalha no console do terminal
    return NextResponse.json(
      { error: "Erro interno no servidor", details: error.message },
      { status: 500 }
    );
  }
}