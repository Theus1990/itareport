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

            <div className='card-group'>
                <div className='card-eric max-w-sm rounded overflow-hidden shadow-lg'>
                    <div className='Image'>
                        <Image
                            className='rounded-full'
                            src={eric}
                            height={400}
                            width={400}
                        />
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title text-2xl text-center'>Eric</h5>
                        <p className='card-text'>Desenvolvedor.</p>
                        <p className='card-text'>
                            Responsável por desenvolver e programar o Front-end.
                        </p>
                        <div className="flex items-stretch">
                        <Image
                            src={linkedin}
                            width='30'
                            height='30'
                            className='icon pb-2'
                        />
                        <a
                            href='https://www.linkedin.com/in/eric-mesquita-3826a7180/'
                            target='_blank'
                            className="link text-center ps-2">linkedin.com/in/eric-mesquita
                        </a>
                        </div>
                        <div className="flex items-stretch">
                        <Image
                            src={github}
                            width='30'
                            height='30'
                            className='icon pb-2'
                        />
                        <a
                            href='https://github.com/EricmesquiBR'
                            target='_blank'
                            className="link text-center ps-2">https://github.com/EricmesquiBR
                        </a>
                        </div>  
                    </div>
                </div>
                <div className='card-lucas max-w-sm rounded overflow-hidden shadow-lg'>
                    <div className='Image'>
                        <Image
                            className='rounded-full'
                            src={lucas}
                            height={400}
                            width={400}
                        />
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title text-2xl text-center'>Lucas</h5>
                        <p className='card-text'>Desenvolvedor.</p>
                        <p className='card-text'>
                            Responsável por desenvolver e programar o Back-End.
                        </p>
                        <div className="flex items-stretch">
                        <Image
                            src={linkedin}
                            width='30'
                            height='30'
                            className='icon pb-2'
                        />
                        <a
                            href='https://www.linkedin.com/in/lucas-sousa-689b6a236/'
                            target='_blank'
                            className="link text-center ps-2">
                            linkedin.com/in/lucas-sousa
                        </a>
                        </div>
                        <div className="flex items-stretch">
                        <Image
                            src={github}
                            width='30'
                            height='30'
                            className='icon pb-2'
                        />
                        <a href='https://github.com/1M0RR1V3L' 
                           target='_blank'
                           className="link text-center ps-2">https://github.com/1M0RR1V3L
                        </a>
                        </div>
                    </div>
                </div>
                <div className='card-matheus max-w-sm rounded overflow-hidden shadow-lg'>
                    <div className='Image'>
                        <Image
                            className='rounded-full'
                            src={matheus}
                            height={400}
                            width={400}
                        />
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title text-2xl text-center'>Matheus</h5>
                        <p className='card-text'>Desenvolvedor e BDA.</p>
                        <p className='card-text'>
                            Responsável pela modelagem, criação e manipulação do BD.
                           
                        </p>
                        <div className="flex items-stretch">
                        <Image
                            src={linkedin}
                            width='30'
                            height='30'
                            className='icon pb-2'
                        /> 
                        <a
                            href='https://www.linkedin.com/in/matheus-feitosa-de-oliveira-rabelo/'
                            target='_blank'
                            className="link text-center ps-2">linkedin.com/in/matheus-feitosa                     
                        </a>
                        </div>
                        <div className="flex items-stretch">
                        <Image
                            src={github}
                            width='30'
                            height='30'
                            className='icon pb-2'    
                        />
                        <a href='https://github.com/Theus1990' 
                           target='_blank'
                           className="link text-center ps-2">https://github.com/Theus1990
                        </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Sobre
