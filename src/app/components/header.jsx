"use client"

import { use, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useGlobalContext } from "../context/store"
import { verify } from "crypto"

function Header() {
    const { userId, logout } = useGlobalContext()
    const router = useRouter()

    const handleLogout = (event) => {
        event.preventDefault()
        logout()
        router.push("/")
    }

    return (
        <header className='flex items-center justify-between bg-gray-900 py-10 px-6'>
            <div className='text-white text-3xl font-bold'>
                <a href='/'>ItaReport</a>
            </div>
            <nav className='space-x-5'>
                {userId === null || userId === "" ? (
                    <>
                        <a href='/login' className='text-white'>
                            Login
                        </a>
                        <a
                            href='/cadastrar'
                            className='text-white rounded-md border border-slate-100 p-2 hover:bg-slate-100 hover:text-gray-900 transition duration-100 ease-in-out'
                        >
                            Cadastrar
                        </a>
                    </>
                ) : (
                    <>
                        <a
                            href='/formDenuncia/'
                            className='text-white rounded-md border border-slate-100 p-2 hover:bg-slate-100 hover:text-gray-900 transition duration-100 ease-in-out'
                        >
                            Fazer Denúncia
                        </a>
                        <a
                            href='/'
                            className='text-white'
                            onClick={handleLogout}
                        >
                            Sair
                        </a>
                    </>
                )}
            </nav>
        </header>
    )
}

export default Header
