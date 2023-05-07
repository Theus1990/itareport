function Header(){
    return (
        <div className="App">
              <div className="main">
                <div className="center">
                    <div className="menu">
                      <div className="logo">
                         <h1>ItaReport</h1>
                      </div>
                      <div className="item-menu">
                        <a href="#">Cadastrar</a>
                      </div>  
                    </div>
                </div>
              </div>
              <div className="Desc">
                 <h2>Faça uma denúncia, faça a diferença!</h2> <br/>
                   <p>Colabore com outros cidadãos e ajude a tornar
                   nossa cidade um lugar melhor!
                   </p>
              </div>
              <div className="CTA">
                <div className="CTA-Bottom">
                    <a href="#">Ver Mapa de Denúncias</a>
                </div>
              </div>
        </div>
      )

}

export default Header;

