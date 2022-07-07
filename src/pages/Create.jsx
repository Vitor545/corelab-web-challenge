import React from 'react';
import Header from '../components/Header';

function Create() {
  return (
    <section>
      <Header />
      <div className="container section_login section_create">
        <div className="login_text">
          <h1>Cadastrar anúncio</h1>
          <p>
            Preencha as credenciais para criar seu anúncio e disponibilizar para
            outros usuários.
          </p>
        </div>
        <div className="ms_gerror">
          <span>Error message</span>
        </div>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div className="fieldOne input">
            <label htmlFor="name_id">
              Nome
              <input type="text" placeholder="Coloque o nome" id="name_id" />
            </label>
            <label htmlFor="marca_id">
              Marca
              <input type="text" placeholder="Coloque a marca" id="marca_id" />
            </label>
          </div>
          <div className="fieldTwo input email">
            <label htmlFor="ano_id">
              Ano
              <input
                type="number"
                placeholder="Selecione o ano"
                id="ano_id"
                max={2022}
                min={1885}
              />
            </label>
            <label htmlFor="placa_id">
              Placa
              <input type="text" placeholder="Coloque a placa" id="placa_id" />
            </label>
            <label htmlFor="cor_id">
              Cor do Veículo
              <input type="color" id="cor_id" />
            </label>
          </div>
          <div className="field input password">
            <label htmlFor="descrição_id">
              Descrição
              <textarea
                id="descrição_id"
                name="description"
                rows="5"
                cols="33"
              />
            </label>
          </div>
          <div className="fieldOne input">
            <label htmlFor="pricemin_id">
              Preço mínimo
              <input
                type="text"
                placeholder="Coloque o preço mínimo"
                id="pricemin_id"
              />
            </label>
            <label htmlFor="pricemax_id">
              Preço Máximo
              <input
                type="text"
                placeholder="Coloque o preço máximo"
                id="pricemax_id"
              />
            </label>
          </div>
          <button className="btn" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Create;
