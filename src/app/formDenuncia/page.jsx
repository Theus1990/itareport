import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Forms() {
    return (
        <>
            <Header />
            <div className='flex justify-center items-center pt-36 pb-36'>
                <div className='form-register grid grid-cols-2 gap-3 p-6 shadow-lg bg-slate-50 rounded-md'>
                    <h1 className='text-3xl block text-center font-semibold col-span-2'>
                        <i className='fa-solid fa-user'></i> Formulário de
                        Denúncia
                    </h1>
                    <hr className='mt-3 col-span-2' />
                    <div className='mt-3 col-span-2'>
                        <label for='titulo' className='block text-base mb-2 '>
                            Titulo
                        </label>
                        <input
                            type='text'
                            id='nome'
                            className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                            placeholder='Digite o título da denúncia...'
                        />
                    </div>
                    <div className='mt-3 col-span-2'>
                        <label for='email' className='block text-base mb-2'>
                            Descrição
                        </label>
                        <input
                            type='text'
                            id='email'
                            className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                            placeholder='Descreva a denúncia...'
                        />
                    </div>
                    <div className='mt-3 col-span-2 grid grid-cols-12 gap-3'>
                        <div className='col-span-10'>
                            <label for='cpf' className='block text-base mb-2'>
                                Endereço
                            </label>
                            <input
                                type='text'
                                id='cpf'
                                className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                                placeholder='Digite seu e-Mail...'
                            />
                        </div>
                        <div className='col-span-2'>
                            <label for='cpf' className='block text-base mb-2'>
                                Nº
                            </label>
                            <input
                                type='text'
                                id='cpf'
                                className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                                placeholder='Digite seu e-Mail...'
                            />
                        </div>
                    </div>

                    <div className='mt-3'>
                        <label for='cpf' className='block text-base mb-2'>
                            Cidade
                        </label>
                        <input
                            type='text'
                            id='cpf'
                            className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                            placeholder='Digite seu e-Mail...'
                        />
                    </div>
                    <div className='mt-3'>
                        <label for='cpf' className='block text-base mb-2'>
                            Bairro
                        </label>
                        <input
                            type='text'
                            id='cpf'
                            className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                            placeholder='Digite seu e-Mail...'
                        />
                    </div>
                    <div className='mt-3 flex justify-between items-center col-span-2'>
                        <div className='block text-base mb-2'>
                            <label htmlFor='inputImagem' className='form-label'>
                                Insira uma imagem do report abaixo:
                            </label>
                            <input
                                type='file'
                                className='form-control'
                                id='inputImagem'
                            />
                        </div>
                    </div>
                    <div className='mt-5 col-span-2'>
                        <button
                            type='submit'
                            className='border-2 border-gray-900 bg-gray-900 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-gray-900 font-semibold'
                        >
                            <i className='fa-solid fa-right-to-bracket'></i>
                            &nbsp;&nbsp;Enviar
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
