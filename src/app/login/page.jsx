"use client"

import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Head from "next/head"

export default function Login() {
    return (
        <>
            <Header />
            {/*form to login using bootstrap form-group to inputs */}
            <div class='flex justify-center items-center pt-48 pb-48'>
                <div class='form-login p-6 shadow-lg bg-slate-50 rounded-md'>
                    <h1 class='text-3xl block text-center font-semibold'>
                        <i class='fa-solid fa-user'></i> Login
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
                            <i class='fa-solid fa-right-to-bracket'></i>
                            &nbsp;&nbsp;Login
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
