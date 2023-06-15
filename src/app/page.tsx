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
                        <h2 className="text-3xl pt-10">Faça uma denúncia, faça a diferença!</h2> <br />
                        <p className="pb-10">
                            Colabore com outros cidadãos e ajude a tornar nossa
                            cidade um lugar melhor!
                        </p>
                    </div>
                    <div className='CTA'>
                        <div className='CTA-Bottom'>
                            <a
                                href='/mapa/'
                                className='rounded border-black border-2 bg-gray-500 text-gray-200 p-4'
                            >
                                Ver Mapa de Denúncias
                            </a>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-4 pt-10'>
                    <div className='card border-solid  border-black border-2 p-2'>
                        <Image src={cta} className='card-img-top border-solid  border-black border-2' alt='...' />
                        <div className='card-body text-light'>
                            <h5 className='card-title'>Card title</h5>
                            <p className='card-text'>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </p>
                            <p className='card-text'>
                                <small className='text-body-secondary'>
                                    Last updated 3 mins ago
                                </small>
                            </p>
                        </div>
                    </div>
                    <div className='card border-solid  border-black border-2 p-2'>
                        <Image src={cta} className='card-img-top border-solid  border-black border-2' alt='...' />
                        <div className='card-body text-light'>
                            <h5 className='card-title'>Card title</h5>
                            <p className='card-text'>
                                This card has supporting text below as a natural
                                lead-in to additional content.
                            </p>
                            <p className='card-text'>
                                <small className='text-body-secondary'>
                                    Last updated 3 mins ago
                                </small>
                            </p>
                        </div>
                    </div>
                    <div className='card border-solid  border-black border-2 p-2'>
                        <Image src={cta} className='card-img-top border-solid  border-black border-2' alt='...' />
                        <div className='card-body text-light'>
                            <h5 className='card-title'>Card title</h5>
                            <p className='card-text'>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                card has even longer content than the first to
                                show that equal height action.
                            </p>
                            <p className='card-text'>
                                <small className='text-body-secondary'>
                                    Last updated 3 mins ago
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
