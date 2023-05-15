import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "./style.css";

export default function Forms() {
  return (
    <>
      <div className="forms">
        <Header />
        <div className="container bg-light">
          <div className="titulo">
            <h2>Formulário de Denúncia</h2>
          </div>
          <form className="row row g-3 text-dark">
            <div className="col-md-12">
              <label for="inputtitulo" className="form-label">
                Titulo
              </label>
              <input type="text" className="form-control" id="inputtitulo" />
            </div>
            <div className="col-9">
              <label for="inputEndereco" className="form-label">
                Endereço
              </label>
              <input type="text" className="form-control" id="inputEndereco" />
            </div>
            <div className="col-3">
              <label for="inputNumero" className="form-label">
                Nº
              </label>
              <input type="text" className="form-control" id="inputNumero" />
            </div>
            <div className="col-6">
              <label for="inputCidade" className="form-label">
                Cidade
              </label>
              <input type="text" className="form-control" id="inputCidade" />
            </div>
            <div className="col-6">
              <label for="inputBairro" className="form-label">
                Bairro
              </label>
              <input type="text" className="form-control" id="inputBairro" />
            </div>
            <div className="col-12">
              <label for="inputDescricao" className="form-label">
                Descrição
              </label>
              <textarea className="form-control" id="inputDescricao" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <label for="inputImagem" className="form-label">
                Insira uma imagem do report abaixo:
              </label>
              <input type="file" className="form-control" id="inputImagem" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}
