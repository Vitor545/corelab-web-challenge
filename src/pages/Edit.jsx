import React from 'react';
import Header from '../components/Header';

function Edit() {
  return (
    <section>
      <Header />
      <div className="container section_login section_create">
        <div className="login_text">
          <h1>Editar anúncio</h1>
          <p>
            Preencha as credenciais para editar seu anúncio e disponibilizar
            para outros usuários.
          </p>
        </div>
        <div className="ms_gerror">
          <span>Error message</span>
        </div>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div className="fieldOne input">
            <label htmlFor="email_id">
              Nome
              <input type="text" placeholder="Coloque o nome" id="email_id" />
            </label>
            <label htmlFor="email_id">
              Marca
              <input type="text" placeholder="Coloque a marca" id="email_id" />
            </label>
          </div>
          <div className="fieldTwo input email">
            <label htmlFor="email_id">
              Cor
              <input type="color" placeholder="Coloque a cor" id="email_id" />
            </label>
            <label htmlFor="email_id">
              Ano
              <input
                type="number"
                placeholder="Selecione o ano"
                id="email_id"
                max={2022}
                min={1885}
              />
            </label>
            <label htmlFor="email_id">
              Placa
              <input type="text" placeholder="Coloque a placa" id="email_id" />
            </label>
          </div>
          <div className="field input password">
            <label htmlFor="password_id">
              Descrição
              <textarea id="story" name="story" rows="5" cols="33" />
            </label>
          </div>
          <div className="fieldOne input">
            <label htmlFor="email_id">
              Preço mínimo
              <input
                type="text"
                placeholder="Coloque o preço mínimo"
                id="email_id"
              />
            </label>
            <label htmlFor="email_id">
              Preço Máximo
              <input
                type="text"
                placeholder="Coloque o preço máximo"
                id="email_id"
              />
            </label>
          </div>
          <button className="btn" type="submit">
            Editar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Edit;
