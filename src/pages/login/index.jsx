import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import "./style.css"

export default function Login() {
    return (
        <>
            <div className='login'>
                <Header />
                <div className='Container'>
                    <div className='row align-items-center'>
                        <div className='col-md-10 mx-auto col-lg-5'>
                            <form className='p-4 p-md-5 border rounded-3 bg-light'>
                                <div className='form-group'>
                                    <div className='form-floating'>
                                        <input
                                            type='email'
                                            className='form-control'
                                            id='inputEmail'
                                            placeholder='E-mail'
                                        />
                                        <label for='inputEmail'>E-mail</label>
                                    </div>
                                </div>
                                <div className='form-group py-5'>
                                    <div className='form-floating'>
                                        <input
                                            type='password'
                                            className='form-control'
                                            id='inputPassword'
                                            placeholder='Senha'
                                        />
                                        <label for='inputPassword'>Senha</label>
                                    </div>
                                </div>
                                <div className='checkbox'>
                                    <label>
                                        <input
                                            type='checkbox'
                                            value='lembrar de mim'
                                        />{" "}
                                        Lembrar-me
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
