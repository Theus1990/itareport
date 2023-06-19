"use client"

import { React, useState } from "react"
import Router from "next/router"
import axios from "axios"
import Header from "../components/header"
import Footer from "../components/footer"
import { SHA256 } from "crypto-js"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const hashPassword = (password) => {
        return SHA256(password).toString()
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const hashedPassword = hashPassword(password)

        axios
            .get("http://localhost:3030/user", {
                data: {
                    email,
                    password: hashedPassword
                }
            })
            .then((response) => {
                console.log(response.data)

                if (response.data.error) {
                    alert(response.data.message)
                    return
                }

                alert("Login feito com sucesso!")
            })
            .catch((error) => {
                console.log(error)
                alert("Erro ao fazer login")
            })
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
