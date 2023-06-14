// app/api/services/userService.ts
import prismaClient from "../config/server/db/prismaClient";

export async function createUserService(name, email, cpf, password) {
  try {
    const user = await prismaClient.usuario.create({
      data: {
        name,
        email,
        cpf,
        password,
      },
    });

    return user;
  } catch (error) {
    throw new Error(`Usuário não criado ${error}`);
  }
}

export async function getUserByEmail(email) {
  try {
    const user = await prismaClient.usuario.findUnique({
      where: {
        email,
      },
    });

    return user;
  } catch (error) {
    throw new Error("Erro ao buscar usuário por email");
  }
}

export async function updateUserEmail(emailOld, emailNew) {
  try {
    const email = await prisma.user.update({
      where: { email: emailOld },
      data: { email: emailNew },
    });
    return email;
  } catch (error) {
    throw new Error("Erro ao atualizar email");
  }
}

export async function updateUserName(email, nome) {
  try {
    const name = await prisma.user.update({
      where: { email: email },
      data: { name: nome },
    });
    return name;
  } catch (error) {
    throw new Error("Erro ao atualizar o nome");
  }
}

export async function updateUserPassowrd(email, senha) {
  try {
    const password = await prisma.user.update({
      where: { email: email },
      data: { password: senha },
    });
    return password;
  } catch (error) {
    throw new Error("Erro ao atualizar o nome");
  }
}
