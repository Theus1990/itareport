import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import "./style.css"

export default function Login() {
    return (
        <>
            <div className='register'>
                <Header />
                <div className='container bg-light'>
                    <form className='row g-3 text-dark '>
                        <div className='col-md-12'>
                            <label for='inputEmail' className='form-label'>
                                Email
                            </label>
                            <input
                                type='email'
                                className='form-control'
                                id='inputEmail'
                            />
                        </div>
                        <div className='col-md-12'>
                            <label for='inputPassword' className='form-label'>
                                Senha
                            </label>
                            <input
                                type='password'
                                className='form-control'
                                id='inputPassword'
                            />
                        </div>
                        <div className='col-12 align'>
                            <button
                                type='submit'
                                formAction='/'
                                className='btn btn-primary'
                            >
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
