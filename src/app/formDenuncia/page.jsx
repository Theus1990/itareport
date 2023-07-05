"use client"

import { React, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import axios from "axios"

export default function Forms() {
    const [title, setTitle] = useState("teste")
    const [content, setContent] = useState("teste")
    const [id, setId] = useState("4e266564-ed82-4233-8810-040e323d2350")
    const [idCat, setIdCat] = useState("43116f59-0b4d-4da6-a8a4-3e82b87969be")
    const [street, setStreet] = useState("teste")
    const [district, setDistrict] = useState("teste")
    const [city, setCity] = useState("teste")

    const handleSubmit = (e) => {
        e.preventDefault()

        axios
            .post("http://localhost:3030/report", {
                title,
                content,
                id,
                idCat,
                street,
                district,
                city
            })
            .then((response) => {
                console.log(response.data)

                if (response.data.error) {
                    alert(response.data.message)
                    return
                }

                alert("Denúncia cadastrada com sucesso")
            })
            .catch((error) => {
                console.log(error)
                alert("Erro ao cadastrar denúncia")
            })
    }

    return (
        <>
            <div className='create-report'>
                <Header />
                <form
                    className='flex justify-center items-center pt-36 pb-36'
                    onSubmit={handleSubmit}
                >
                    <div className='form-register grid grid-cols-2 gap-3 p-6 shadow-lg bg-slate-50 rounded-md'>
                        <h1 className='text-3xl block text-center font-semibold col-span-2'>
                            Formulário de Denúncia
                        </h1>
                        <hr className='mt-3 col-span-2' />
                        <div className='mt-3 col-span-2'>
                            <label
                                htmlFor='title'
                                className='block text-base mb-2'
                            >
                                Título
                            </label>
                            <input
                                type='text'
                                id='title'
                                className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                                placeholder='Tema da denúncia...'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className='mt-3 col-span-2'>
                            <label
                                htmlFor='content'
                                className='block text-base mb-2'
                            >
                                Descrição
                            </label>
                            <input
                                type='text'
                                id='content'
                                className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                                placeholder='Descreva a denúncia...'
                                value={content}
                                onChange={(e) => setContent(e.target.content)}
                            />
                        </div>
                        <div className='mt-3 col-span-2 grid grid-cols-12 gap-3'>
                            <div className='col-span-8'>
                                <label
                                    htmlFor='cpf'
                                    className='block text-base mb-2'
                                >
                                    Endereço
                                </label>
                                <input
                                    type='text'
                                    id='cpf'
                                    className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                                    placeholder='Digite o endereço da denúncia...'
                                    value={street}
                                    onChange={(e) => setStreet(e.target.street)}
                                />
                            </div>
                            <div className='col-span-4'>
                                <label
                                    htmlFor='cpf'
                                    className='block text-base mb-2'
                                >
                                    Categoria
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
                            <label
                                htmlFor='cpf'
                                className='block text-base mb-2'
                            >
                                Cidade
                            </label>
                            <input
                                type='text'
                                id='cpf'
                                className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                                placeholder='Digite a cidade...'
                                value={city}
                                onChange={(e) => setCity(e.target.city)}
                            />
                        </div>
                        <div className='mt-3'>
                            <label
                                htmlFor='cpf'
                                className='block text-base mb-2'
                            >
                                Bairro
                            </label>
                            <input
                                type='text'
                                id='cpf'
                                className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                                placeholder='Digite seu e-Mail...'
                                value={district}
                                onChange={(e) => setDistrict(e.target.district)}
                            />
                        </div>
                        <div className='mt-3 flex justify-between items-center col-span-2'>
                            <div className='block text-base mb-2'>
                                <label
                                    htmlFor='inputImagem'
                                    className='form-label'
                                >
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
                                Enviar
                            </button>
                        </div>
                    </div>
                </form>
                <Footer />
            </div>
        </>
    )
}
