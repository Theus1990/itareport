import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import "./style.css"

export default function Register() {
    return (
        <>
            <div className='register'>
                <Header />
                <div className='container bg-light w-75'>
                    <form className='row g-3 text-dark '>
                        <div className='col-md-12'>
                            <label for='inputName' className='form-label'>
                                Nome Completo
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='inputName'
                            />
                        </div>
                        <div className='col-md-6'>
                            <label for='inputEmail' className='form-label'>
                                Email
                            </label>
                            <input
                                type='email'
                                className='form-control'
                                id='inputEmail'
                            />
                        </div>
                        <div className='col-md-6'>
                            <label for='inputNumber' className='form-label'>
                                CPF
                            </label>
                            <input
                                type='number'
                                className='form-control'
                                id='inputNumber'
                            />
                        </div>
                        <div className='col-md-6'>
                            <label for='inputPassword' className='form-label'>
                                Senha
                            </label>
                            <input
                                type='password'
                                className='form-control'
                                id='inputPassword'
                            />
                        </div>
                        <div className='col-md-6'>
                            <label for='inputPassword' className='form-label'>
                                Confirmação Senha
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
                                formAction='/map/'
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
