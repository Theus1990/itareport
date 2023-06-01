import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Login() {
    return (
        <>
            <div className='register'>
                <Header />
                {/* Form to login using Tailwind CSS classes for inputs */}
                <div className='container bg-white w-1/2'>
                    <form className='grid grid-cols-1 gap-4 text-black'>
                        <div className='form-group'>
                            <label htmlFor='exampleInputEmail1'>Email</label>
                            <input
                                type='email'
                                className='form-input'
                                id='exampleInputEmail1'
                                aria-describedby='emailHelp'
                            />
                            <small
                                id='emailHelp'
                                className='form-text text-muted'
                            >
                                Nunca iremos compartilhar seu email com mais
                                ninguém.
                            </small>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='exampleInputPassword1'>Senha</label>
                            <input
                                type='password'
                                className='form-input'
                                id='exampleInputPassword1'
                            />
                        </div>
                        <div className='form-group flex items-center'>
                            <input
                                type='checkbox'
                                className='form-checkbox'
                                id='exampleCheck1'
                            />
                            <label htmlFor='exampleCheck1' className='ml-2'>
                                Check me out
                            </label>
                        </div>
                        <button
                            type='submit'
                            formAction='/map/'
                            className='btn btn-info col-span-1'
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
