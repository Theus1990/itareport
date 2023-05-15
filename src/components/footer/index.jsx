import React from "react"
import "./style.css"
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon
} from "mdb-react-ui-kit"

function Footer() {
    return (
        <MDBFooter
            bgColor='light'
            className='text-center text-lg-start text-muted'
        >
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'></section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon='gem' className='me-0' />
                                ItaReport
                            </h6>
                            <p>
                                Site para relatórios de reclamações da
                                populacão.
                            </p>
                        </MDBCol>

                        <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                Tecnologias
                            </h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Angular
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    React
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Vue
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Laravel
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                Ajuda
                            </h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Termos de Uso
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Suporte
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Sugestões
                                </a>
                            </p>
                            <p>
                                <a href='/aboutUs/' className='text-reset'>
                                    Sobre Nós
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol
                            md='4'
                            lg='3'
                            xl='3'
                            className='mx-auto mb-md-0 mb-4'
                        >
                            <h6 className='text-uppercase fw-bold mb-4'>
                                Contato
                            </h6>
                            <p>
                                <MDBIcon icon='home' className='me-2' />
                                Itapajé, Ceará, Brasil
                            </p>
                            <p>
                                <MDBIcon icon='envelope' className='me-3' />
                                alu@alu.ufc.br
                            </p>
                            <p>
                                <MDBIcon icon='phone' className='me-3' /> +55
                                (85) 99999-9999
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div
                className='text-center p-4'
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
                © 2021 Copyright:
                <a
                    className='text-reset fw-bold'
                    href='https://mdbootstrap.com/'
                >
                    MDBootstrap.com
                </a>
            </div>
        </MDBFooter>
    )
}

export default Footer
