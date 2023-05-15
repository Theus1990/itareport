import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import "./style.css"
import linkedin from "./linkedin.svg"
import github from "./github.svg"
import eric from "./eric.jpeg"
import lucas from "./lucas.jpeg"
import matheus from "./matheus.png"

export default function AboutUS() {
    return (
        <>
            <Header />

            <div className='title'>
                <h1 class='text-center'>Quem somos?</h1>
                <p class='text-center'>
                    Somos estudantes da UFC campus Jardins de Anita em Itapagé.
                    Atualmente estamos no 3º semestre e desenvolvemos esse site
                    com o intuito de ajudar a populacão de itapajé.
                </p>
            </div>

            <div class='card-group text-light'>
                <div class='card'>
                    <div className='img'>
                        <img
                            class='rounded-circle'
                            src={eric}
                            height={400}
                            width={400}
                        />
                    </div>
                    <div class='card-body'>
                        <h5 class='card-title'>Eric</h5>
                        <p class='card-text'>Desenvolvedor.</p>
                        <p class='card-text'>
                            Responsável por desenvolver e programar o Front-end.
                        </p>
                        <a
                            href='https://www.linkedin.com/in/eric-mesquita-3826a7180/'
                            target='_blank'
                        >
                            <img
                                src={linkedin}
                                width='30'
                                height='30'
                                className='bg-light'
                            />{" "}
                            linkedin.com/in/eric-mesquita
                        </a>{" "}
                        <br />
                        <a
                            href='https://github.com/EricmesquiBR'
                            target='_blank'
                        >
                            <img
                                src={github}
                                width='30'
                                height='30'
                                className='bg-light'
                            />{" "}
                            https://github.com/EricmesquiBR
                        </a>
                        <p class='card-text'>
                            <small class='text-muted'>
                                Última atualização 15/05/2023
                            </small>
                        </p>
                    </div>
                </div>
                <div class='card'>
                    <div className='img'>
                        <img
                            class='rounded-circle'
                            src={lucas}
                            height={400}
                            width={400}
                        />
                    </div>
                    <div class='card-body'>
                        <h5 class='card-title'>Lucas</h5>
                        <p class='card-text'>Desenvolvedor.</p>
                        <p class='card-text'>
                            Responsável por desenvolver e programar o Back-End.
                        </p>
                        <a
                            href='https://www.linkedin.com/in/lucas-sousa-689b6a236/'
                            target='_blank'
                        >
                            <img
                                src={linkedin}
                                width='30'
                                height='30'
                                className='bg-light'
                            />{" "}
                            linkedin.com/in/lucas-sousa
                        </a>{" "}
                        <br />
                        <a href='https://github.com/1M0RR1V3L' target='_blank'>
                            <img
                                src={github}
                                width='30'
                                height='30'
                                className='bg-light'
                            />{" "}
                            https://github.com/1M0RR1V3L
                        </a>
                        <p class='card-text'>
                            <small class='text-muted'>
                                Última atualização 15/05/2023
                            </small>
                        </p>
                    </div>
                </div>
                <div class='card'>
                    <div className='img'>
                        <img
                            class='rounded-circle'
                            src={matheus}
                            height={400}
                            width={400}
                        />
                    </div>
                    <div class='card-body'>
                        <h5 class='card-title'>Matheus</h5>
                        <p class='card-text'>Desenvolvedor e BDA.</p>
                        <p class='card-text'>
                            Responsável pela modelagem, criação e manipulação do
                            Banco de Dados.
                        </p>
                        <a
                            href='https://www.linkedin.com/in/matheus-feitosa-de-oliveira-rabelo/'
                            target='_blank'
                        >
                            <img
                                src={linkedin}
                                width='30'
                                height='30'
                                className='bg-light'
                            />{" "}
                            linkedin.com/in/matheus-feitosa
                        </a>{" "}
                        <br />
                        <a href='https://github.com/Theus1990' target='_blank'>
                            <img
                                src={github}
                                width='30'
                                height='30'
                                className='bg-light'
                            />{" "}
                            https://github.com/Theus1990
                        </a>
                        <p class='card-text'>
                            <small class='text-muted'>
                                Última atualização 15/05/2023
                            </small>
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
