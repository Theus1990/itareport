import React from "react"
import "./style.css"

function Footer() {
    return (
        <div class='footer d-flex flex-column'>
            <div class='footer-content d-flex m-auto'>
                <div class='box-info '>
                    <div class='title'>
                        <h1 class='fs-3 m-0'>Sobre Nós</h1>
                    </div>
                    <ul class='d-flex flex-column'>
                        <li>
                            <a href='#' title='Sobre'>
                                Equipe
                            </a>
                        </li>
                        <li>
                            <a href='#'>Sobre o Projeto</a>
                        </li>
                        <li>
                            <a href='mailto:#' title='E-mail para o suporte'>
                                Reportar Erro
                            </a>
                        </li>
                    </ul>
                </div>
                <div class='box-info '>
                    <div class='title'>
                        <h1 class='fs-3 m-0'>Outros Projetos</h1>
                    </div>
                    <ul>
                        <li>
                            <a href='#'>Digitateca</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class='copy d-flex flex-column '>
                <p class='text-center m-0'>2023 ItaReport</p>
            </div>
        </div>
    )
}

export default Footer
