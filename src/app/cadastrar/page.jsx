"use client"

import { React, useState } from "react"
import { SHA256 } from "crypto-js"

import Header from "../components/header"
import Footer from "../components/footer"
import axios from "axios"

export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCPF] = useState("")
    const [password, setPassword] = useState("")
    const [surPassword, setSurPassword] = useState("")

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        return regex.test(email)
    }

    const validatePassword = (password, surpassword) => {
        return password === surpassword
    }

    const hashPassword = (password) => {
        return SHA256(password).toString()
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!validateEmail(email)) {
            alert("E-mail inválido")
            return
        }

        if (!validatePassword(password, surPassword)) {
            alert("Senhas não conferem")
            return
        }

        const hashedPassword = hashPassword(password)

        axios
            .post("/api/usuario", {
                name,
                email,
                cpf,
                password: hashedPassword
            })
            .then((response) => {
                console.log(response.data)

                if (response.data.error) {
                    alert(response.data.message)
                    return
                }

                alert("Usuário cadastrado com sucesso")
            })
            .catch((error) => {
                console.log(error)
                alert("Erro ao cadastrar usuário")
            })

        // Limpa os campos
        setName("")
        setEmail("")
        setCPF("")
        setPassword("")
        setSurPassword("")
    }

    return (
        <>
            <div className='register'>
                <Header />
                <form
                    className='flex justify-center items-center pt-36 pb-36'
                    onSubmit={handleSubmit}
                >
                    <div className='htmlForm-register grid grid-cols-2 gap-3 p-6 shadow-lg bg-slate-50 rounded-md'>
                        <h1 className='text-3xl block text-center font-semibold col-span-2'>
                            Cadastro
                        </h1>
                        <hr className='mt-3 col-span-2' />
                        <div className='mt-3 col-span-2'>
                            <label
                                htmlFor='name'
                                className='block text-base mb-2 '
                            >
                                Nome completo
                            </label>
                            <input
                                type='text'
                                id='name'
                                className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                                placeholder='Digite seu nome...'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className='mt-3'>
                            <label
                                htmlFor='email'
                                className='block text-base mb-2'
                            >
                                Email
                            </label>
                            <input
                                type='text'
                                id='email'
                                className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                                placeholder='Digite seu e-Mail...'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='mt-3'>
                            <label
                                htmlFor='cpf'
                                className='block text-base mb-2'
                            >
                                CPF
                            </label>
                            <input
                                type='text'
                                id='cpf'
                                className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                                placeholder='Digite seu CPF...'
                                value={cpf}
                                onChange={(e) => setCPF(e.target.value)}
                            />
                        </div>
                        <div className='mt-3'>
                            <label
                                htmlFor='password'
                                className='block text-base mb-2'
                            >
                                Senha
                            </label>
                            <input
                                type='password'
                                id='password'
                                className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                                placeholder='Digite sua senha...'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='mt-3'>
                            <label
                                htmlFor='password'
                                className='block text-base mb-2'
                            >
                                Senha
                            </label>
                            <input
                                type='password'
                                id='surPassword'
                                className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                                placeholder='Digite sua senha...'
                                value={surPassword}
                                onChange={(e) => setSurPassword(e.target.value)}
                            />
                        </div>
                        <div className='mt-3 flex justify-between items-center col-span-2'>
                            <div>
                                <input type='checkbox' />
                                <label className='ps-1'>
                                    Concordo com os termos e condições de uso do
                                    site e sua política de privacidade.
                                </label>
                            </div>
                        </div>
                        <div className='mt-5 col-span-2'>
                            <button
                                type='submit'
                                className='border-2 border-gray-900 bg-gray-900 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-gray-900 font-semibold'
                            >
                                Cadastrar-se
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}
