import {
  createUserService,
  getUserByEmail,
  updateUserEmail,
  updateUserName,
  updateUserPassowrd,
} from "../services/usuarioService";

async function createUser(data) {
  const { name, email, cpf, password } = data;

  // Verificar se todos os campos foram fornecidos
  if (!name || !email || !cpf || !password) {
    return {
      status: 400,
      json: { message: "Todos os campos são obrigatórios" },
    };
  }

  try {
    // Verificar se o email já está em uso
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return {
        status: 400,
        json: { message: "O email já está em uso" },
      };
    }
    // Criar o novo usuário
    const newUser = await createUserService(name, email, cpf, password);

    // Enviar a resposta com o usuário criado (sem a senha)
    const { password: _, ...userWithoutPassword } = newUser;
    return {
      status: 201,
      json: userWithoutPassword,
    };
  } catch (error) {
    return {
      status: 500,
      json: { message: error.message },
    };
  }
}

async function updateUser(data) {
  const { name, email, password } = data;

  try {
    const existingUser = await getUserByEmail(emailNew);
    if (!existingUser) {
      const newEmail = await updateUserEmail(emailOld, emailNew);
      if (newEmail) {
        return {
          status: 200,
          json: { message: "O email foi atualizado" },
        };
      }
      const newName = await updateUserName(email, name);
      if (newName) {
        return {
          status: 200,
          json: { message: "O nome foi atualizado" },
        };
      }
      const newPassword = await updateUserPassowrd(email, password);
      if (newPassword) {
        return {
          status: 200,
          json: { message: "Senha atualizada com sucesso" },
        };
      }
    }
  } catch (error) {
    return {
      status: 500,
      json: { message: error.message },
    };
  }
}

module.exports = {
  createUser,
  updateUser,
};
