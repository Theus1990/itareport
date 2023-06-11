import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'
import cta from '../public/img/CTA-BG.jpeg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
            <Header />
            <div className='landingpage'>
                <div>
                    <div className='Desc'>
                        <h2>Faça uma denúncia, faça a diferença!</h2> <br />
                        <p>
                            Colabore com outros cidadãos e ajude a tornar nossa
                            cidade um lugar melhor!
                        </p>
                    </div>
                    <div className='CTA'>
                        <div className='CTA-Bottom flex flex-col m-auto bg-info'>
                            <a
                                href='/mapa/'
                                className='flex p-10 text-center text-decoration-none'
                            >
                                Ver Mapa de Denúncias
                            </a>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='card'>
                        <Image src={cta} className='card-img-top' alt='...' />
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
                    <div className='card'>
                        <Image src={cta} className='card-img-top' alt='...' />
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
                    <div className='card'>
                        <Image src={cta} className='card-img-top' alt='...' />
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
