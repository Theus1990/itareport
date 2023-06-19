import React from "react"
import Image from "next/image"
import Header from "./components/header"
import Footer from "./components/footer"
import cta from "../../public/img/CTA-BG.jpg"

export default function LandingPage() {
    return (
        <>
            <Header />
            <div className='landingpage'>
                <div className="text-center text-2xl">
                    <div className='Desc'>
                        <h2 className="text-4xl pt-10 font-bold">Faça uma denúncia, faça a diferença!</h2> <br />
                        <p className="pb-10">
                            Colabore com outros cidadãos e ajude a tornar nossa
                            cidade um lugar melhor!
                        </p>
                    </div>
                    <div className='CTA'>
                            <div className="BG-CTA-Bottom card-img-top border-solid flex justify-center items-center">
                                 <Image src={cta} className='cta-img' alt='...' />
                                 <a
                                    href='/mapa/'
                                    className='cta-bottom rounded border-black border-2 bg-gray-500 text-gray-200 p-4 absolute'
                                 >Ver Mapa de Denúncias
                                 </a>
                            </div>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-4 pt-10'>
                    <div className='card border-solid  border-black border-2 p-2'>
                        <Image src={cta} className='card-img-top border-solid  border-black border-2' alt='...' />
                        <div className='card-body text-center'>
                            <h5 className='card-title text-center text-3xl'>1º Passo</h5>
                            <p className='card-text text-2xl'>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </p>
                        </div>
                    </div>
                    <div className='card border-solid  border-black border-2 p-2'>
                        <Image src={cta} className='card-img-top border-solid  border-black border-2' alt='...' />
                        <div className='card-body text-center'>
                            <h5 className='card-title text-center text-3xl'>2º Passo</h5>
                            <p className='card-text text-2xl'>
                                This card has supporting text below as a natural
                                lead-in to additional content.
                            </p>
                        </div>
                    </div>
                    <div className='card border-solid  border-black border-2 p-2'>
                        <Image src={cta} className='card-img-top border-solid  border-black border-2' alt='...' />
                        <div className='card-body text-center'>
                            <h5 className='card-title text-center text-3xl'>3º Passo</h5>
                            <p className='card-text text-2xl'>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                card has even longer content than the first to
                                show that equal height action.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
