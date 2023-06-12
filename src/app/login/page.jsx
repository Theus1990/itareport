"use client"

import { React, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const usuario = await prisma.usuario.findUnique({
                where: {
                    email: email
                }
            })

            if (!usuario) {
                throw new Error("Usuário não encontrado")
            }

            if (usuario.senha !== password) {
                throw new Error("Senha incorreta")
            }

            // Successful login
            console.log("Login successful")
        } catch (error) {
            // Handle errors
            console.error("Login failed:", error)
        } finally {
            await prisma.$disconnect()
        }
    }

    return (
        <>
            <Header />
            <div class='flex justify-center items-center pt-48 pb-48'>
                <form
                    class='form-login p-6 shadow-lg bg-slate-50 rounded-md'
                    onSubmit={handleSubmit}
                >
                    <h1 class='text-3xl block text-center font-semibold'>
                        Login
                    </h1>
                    <hr class='mt-3' />
                    <div class='mt-3'>
                        <label for='email' class='block text-base mb-2'>
                            Email
                        </label>
                        <input
                            type='text'
                            id='email'
                            class='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                            placeholder='Digite seu email...'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div class='mt-3'>
                        <label for='password' class='block text-base mb-2'>
                            Senha
                        </label>
                        <input
                            type='password'
                            id='password'
                            class='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                            placeholder='Digite sua senha...'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div class='mt-3 flex justify-between items-center'>
                        <div>
                            <input type='checkbox' />
                            <label className='ps-1'>Lembre de Mim</label>
                        </div>
                        <div>
                            <a href='#' class='text-gray-900 font-semibold'>
                                Esqueci Minha Senha
                            </a>
                        </div>
                    </div>
                    <div class='mt-5'>
                        <button
                            type='submit'
                            class='border-2 border-gray-900 bg-gray-900 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-gray-900 font-semibold'
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}
