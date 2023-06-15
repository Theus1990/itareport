import React from "react"
import Image from "next/image"
import Header from "../components/header"
import Footer from "../components/footer"
import lucas from "../../../public/sobre/lucas.jpeg"
import matheus from "../../../public/sobre/matheus.png"
import eric from "../../../public/sobre/eric.jpeg"
import github from "../../../public/sobre/github.svg"
import linkedin from "../../../public/sobre/linkedin.svg"

function Sobre() {
    return (
        <>
            <Header />

            <div className='title'>
                <h1 className='text-center'>Quem somos?</h1>
                <p className='text-center'>
                    Somos estudantes da UFC campus Jardins de Anita em Itapagé.
                    Atualmente estamos no 3º semestre e desenvolvemos esse site
                    com o intuito de ajudar a populacão de itapajé.
                </p>
            </div>

            <div className='card-group text-light'>
                <div className='card'>
                    <div className='Image'>
                        <Image
                            className='rounded-circle'
                            src={eric}
                            height={400}
                            width={400}
                        />
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title'>Eric</h5>
                        <p className='card-text'>Desenvolvedor.</p>
                        <p className='card-text'>
                            Responsável por desenvolver e programar o Front-end.
                        </p>
                        <a
                            href='https://www.linkedin.com/in/eric-mesquita-3826a7180/'
                            target='_blank'
                        >
                            <Image
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
                            <Image
                                src={github}
                                width='30'
                                height='30'
                                className='bg-light'
                            />{" "}
                            https://github.com/EricmesquiBR
                        </a>
                        <p className='card-text'>
                            <small className='text-muted'>
                                Última atualização 15/05/2023
                            </small>
                        </p>
                    </div>
                </div>
                <div className='card'>
                    <div className='Image'>
                        <Image
                            className='rounded-circle'
                            src={lucas}
                            height={400}
                            width={400}
                        />
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title'>Lucas</h5>
                        <p className='card-text'>Desenvolvedor.</p>
                        <p className='card-text'>
                            Responsável por desenvolver e programar o Back-End.
                        </p>
                        <a
                            href='https://www.linkedin.com/in/lucas-sousa-689b6a236/'
                            target='_blank'
                        >
                            <Image
                                src={linkedin}
                                width='30'
                                height='30'
                                className='bg-light'
                            />{" "}
                            linkedin.com/in/lucas-sousa
                        </a>{" "}
                        <br />
                        <a href='https://github.com/1M0RR1V3L' target='_blank'>
                            <Image
                                src={github}
                                width='30'
                                height='30'
                                className='bg-light'
                            />{" "}
                            https://github.com/1M0RR1V3L
                        </a>
                        <p className='card-text'>
                            <small className='text-muted'>
                                Última atualização 15/05/2023
                            </small>
                        </p>
                    </div>
                </div>
                <div className='card'>
                    <div className='Image'>
                        <Image
                            className='rounded-circle'
                            src={matheus}
                            height={400}
                            width={400}
                        />
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title'>Matheus</h5>
                        <p className='card-text'>Desenvolvedor e BDA.</p>
                        <p className='card-text'>
                            Responsável pela modelagem, criação e manipulação do
                            Banco de Dados.
                        </p>
                        <a
                            href='https://www.linkedin.com/in/matheus-feitosa-de-oliveira-rabelo/'
                            target='_blank'
                        >
                            <Image
                                src={linkedin}
                                width='30'
                                height='30'
                                className='bg-light'
                            />{" "}
                            linkedin.com/in/matheus-feitosa
                        </a>{" "}
                        <br />
                        <a href='https://github.com/Theus1990' target='_blank'>
                            <Image
                                src={github}
                                width='30'
                                height='30'
                                className='bg-light'
                            />{" "}
                            https://github.com/Theus1990
                        </a>
                        <p className='card-text'>
                            <small className='text-muted'>
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

export default Sobre
