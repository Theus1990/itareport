import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Register() {
    return (
        <>
            <div className='register'>
                <Header />
                <div class='flex justify-center items-center pt-36 pb-36'>
                    <div class='form-register grid grid-cols-2 gap-3 p-6 shadow-lg bg-slate-50 rounded-md'>
                        <h1 class='text-3xl block text-center font-semibold col-span-2'>
                            <i class='fa-solid fa-user'></i> Cadastro
                        </h1>
                        <hr class='mt-3 col-span-2' />
                        <div class='mt-3 col-span-2'>
                            <label for='nome' class='block text-base mb-2 '>
                                Nome completo
                            </label>
                            <input
                                type='text'
                                id='nome'
                                class='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                                placeholder='Digite seu e-Mail...'
                            />
                        </div>
                        <div class='mt-3'>
                            <label for='email' class='block text-base mb-2'>
                                Email
                            </label>
                            <input
                                type='text'
                                id='email'
                                class='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                                placeholder='Digite seu e-Mail...'
                            />
                        </div>
                        <div class='mt-3'>
                            <label for='cpf' class='block text-base mb-2'>
                                CPF
                            </label>
                            <input
                                type='text'
                                id='cpf'
                                class='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                                placeholder='Digite seu e-Mail...'
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
                            />
                        </div>
                        <div class='mt-3'>
                            <label for='password' class='block text-base mb-2'>
                                Confime sua senha
                            </label>
                            <input
                                type='password'
                                id='password'
                                class='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                                placeholder='Digite sua senha...'
                            />
                        </div>
                        <div class='mt-3 flex justify-between items-center col-span-2'>
                            <div>
                                <input type='checkbox' />
                                <label className='ps-1'>
                                    Concordo com os termos e condições de uso do
                                    site e sua política de privacidade.
                                </label>
                            </div>
                        </div>
                        <div class='mt-5 col-span-2'>
                            <button
                                type='submit'
                                class='border-2 border-gray-900 bg-gray-900 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-gray-900 font-semibold'
                            >
                                <i class='fa-solid fa-right-to-bracket'></i>
                                &nbsp;&nbsp;Cadastrar-se
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
