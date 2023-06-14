import { createUserService, getUserByEmail } from "../services/usuarioService"

export async function createUserController(data) {
    const { name, email, password } = data

    // Verificar se todos os campos foram fornecidos
    if (!name || !email || !password) {
        return {
            status: 400,
            json: { message: "Todos os campos são obrigatórios" }
        }
    }

    try {
        // Verificar se o email já está em uso
        const existingUser = await getUserByEmail(email)
        if (existingUser) {
            return {
                status: 400,
                json: { message: "O email já está em uso" }
            }
        }
        // Criar o novo usuário
        const newUser = await createUserService(name, email, password)

        // Enviar a resposta com o usuário criado (sem a senha)
        const { password: _, ...userWithoutPassword } = newUser
        return {
            status: 201,
            json: userWithoutPassword
        }
    } catch (error) {
        return {
            status: 500,
            json: { message: error.message }
        }
    }
}
