import React from 'react'

export default function Login(){
    return (
        <div class="Container">
            <div class="row align-items-center">
                <div class="col-md-10 mx-auto col-lg-5">
                    <form class="p-4 p-md-5 border rounded-3 bg-light">
                        <div class="form-floating">
                            <input type="email" class="form-control" 
                                   id="inputEmail" placeholder="E-mail">
                            </input> 
                                 <lavbel for="inputEmail">E-mail</lavbel>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control"
                                   id="inputPassword" placeholder="Senha">
                            </input>
                                 <label for="inputPassword">Senha</label>
                        </div>
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" value="lembrar de mim"> Lembrar-me
                                </input>
                            </label>
                        </div>
                    </form>
                </div>
            </div>

        </div>
          
        
        )


}
