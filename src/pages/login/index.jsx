import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import "./style.css"

export default function Login() {
    return (
        <>
            <div className='register'>
                <Header />
                {/*form to login using bootstrap form-group to inputs */}
                <div className='container bg-light w-50'>
                    <form className='row g-3 text-dark '>
                        <div className='form-group'>
                            <label for='exampleInputEmail1'>Email</label>
                            <input
                                type='email'
                                className='form-control'
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
                            <label for='exampleInputPassword1'>Senha</label>
                            <input
                                type='password'
                                className='form-control'
                                id='exampleInputPassword1'
                            />
                        </div>
                        <div className='form-group form-check'>
                            <input
                                type='checkbox'
                                className='form-check-input'
                                id='exampleCheck1'
                            />
                            <label
                                className='form-check-label'
                                for='exampleCheck1'
                            >
                                Check me out
                            </label>
                        </div>
                        <button
                            type='submit'
                            formAction='/map/'
                            className='btn btn-info col-md-2'
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
