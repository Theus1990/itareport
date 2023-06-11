import React from "react"
function Footer() {
    return (
        <footer className='bg-gray-900'>
            <div className='footerInfo'>
                <div>
                    <h4 className='font-bold'>ItaReport</h4>
                    <p>Site para relatórios de reclamações da populacão.</p>
                </div>
                <div>
                    <h4 className='font-bold'>Mais Informações</h4>
                    <p></p>
                    <ul>
                        <li>
                            <a href='/sobre'>Sobre</a>
                        </li>
                        <li>
                            <a href='/termos'>
                                Termos de Uso e Política de Privacidade
                            </a>
                        </li>
                        <li>
                            <a href='/tecnologias'>Tecnologias</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-bold'>Contato</h4>
                    <p></p>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.instagram.com/inovilar/'
                    >
                        <i className='pi pi-instagram'></i>
                    </a>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.facebook.com/inovilar'
                    >
                        <i className='pi pi-facebook'></i>
                    </a>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='mailto:contato@inovilar.com.br'
                    >
                        <i className='pi pi-envelope'></i>
                    </a>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.beacons.ai/inovilar/'
                    >
                        <i className='pi pi-link'></i>
                    </a>
                </div>
            </div>
            <div className='copyright'>
                <span>©2023 ItaReport</span>
            </div>
        </footer>
    )
}

export default Footer
