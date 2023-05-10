import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import "./style.css"

export default function LandingPage() {
    return (
        <>
            <div className='landingpage'>
                <Header />
                <div>
                    <div className='Desc'>
                        <h2>Faça uma denúncia, faça a diferença!</h2> <br />
                        <p>
                            Colabore com outros cidadãos e ajude a tornar nossa
                            cidade um lugar melhor!
                        </p>
                    </div>
                    <div className='CTA'>
                        <div className='CTA-Bottom d-flex flex-column m-auto bg-info'>
                            <a
                                href='/'
                                className='d-flex p-10 text-center text-decoration-none'
                            >
                                Ver Mapa de Denúncias
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
