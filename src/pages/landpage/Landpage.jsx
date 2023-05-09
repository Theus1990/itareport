import React from 'react'

const Landpage = () => {
  return (
    <div>
        <div className="Desc">
            <h2>Faça uma denúncia, faça a diferença!</h2> <br/>
            <p>Colabore com outros cidadãos e ajude a tornar
            nossa cidade um lugar melhor!
            </p>
        </div>
        <div className="CTA">
          <div className="CTA-Bottom d-flex flex-column m-auto">
              <a href="#" className='d-flex p-10 text-center text-decoration-none'>Ver Mapa de Denúncias</a>
          </div>
        </div>
    </div>
  )
}

export default Landpage