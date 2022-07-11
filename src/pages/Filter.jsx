import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function Edit() {
  const [nameInput, setnameInput] = useState('');
  const [marca, setMarca] = useState('');
  const [ano, setAno] = useState('');
  const [cor, setCor] = useState('');
  const [descriptionState, setDescription] = useState('');
  const [precoMim, setPrecoMin] = useState('');
  const [precoMax, setPrecoMax] = useState('');

  const navigate = useNavigate();

  async function locationRoute() {
    const dataU = JSON.parse(localStorage.getItem('user'));
    if (!dataU) {
      return navigate('/');
    }
    return navigate('/filter');
  }

  useEffect(() => {
    locationRoute();
  }, []);

  const onChange = ({ target }) => {
    if (target.id === 'name_id') {
      setnameInput(target.value);
    } else if (target.id === 'marca_id') {
      setMarca(target.value);
    } else if (target.id === 'ano_id') {
      setAno(target.value);
    } else if (target.id === 'cor_id') {
      setCor(target.value);
    } else if (target.id === 'descrição_id') {
      setDescription(target.value);
    } else if (target.id === 'pricemin_id') {
      setPrecoMin(target.value);
    } else {
      setPrecoMax(target.value);
    }
  };

  const onClick = async () => {
    const arrayPalavras = {
      nameInput,
      marca,
      ano,
      cor,
      descriptionState,
      precoMax,
      precoMim,
    };

    const myJSON = JSON.stringify(arrayPalavras);
    return navigate(`/searchFilter/${myJSON}`);
  };

  return (
    <section>
      <Header />
      <div className="container section_login section_create">
        <div className="login_text">
          <h1>Filtrar por Parâmetros</h1>
          <p>Preencha as credenciais para filtrar seu anúncio.</p>
        </div>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div className="fieldOne input">
            <label htmlFor="name_id">
              Nome
              <input
                type="text"
                onChange={onChange}
                id="name_id"
                placeholder="Coloque o nome"
                value={nameInput}
              />
            </label>
            <label htmlFor="marca_id">
              Marca
              <input
                type="text"
                onChange={onChange}
                placeholder="Coloque a marca"
                value={marca}
                id="marca_id"
              />
            </label>
          </div>
          <div className="fieldTwo input email">
            <label htmlFor="ano_id">
              Ano
              <input
                type="number"
                placeholder="Selecione o ano"
                id="ano_id"
                value={ano}
                onChange={onChange}
                max={2022}
                min={1885}
              />
            </label>
            <label htmlFor="cor_id">
              Cor do Veículo
              <input type="color" value={cor} onChange={onChange} id="cor_id" />
            </label>
          </div>
          <div className="field input password">
            <label htmlFor="descrição_id">
              Descrição
              <textarea
                id="descrição_id"
                name="description"
                value={descriptionState}
                rows="5"
                onChange={onChange}
                cols="33"
              />
            </label>
          </div>
          <div className="fieldOne input">
            <label htmlFor="pricemin_id">
              Preço mínimo
              <input
                onChange={onChange}
                type="number"
                min={0}
                value={precoMim}
                max={10000000000}
                placeholder="Coloque o preço mínimo"
                id="pricemin_id"
              />
            </label>
            <label htmlFor="pricemax_id">
              Preço Máximo
              <input
                type="number"
                onChange={onChange}
                min={0}
                value={precoMax}
                placeholder="Coloque o preço máximo"
                max={10000000000}
                id="pricemax_id"
              />
            </label>
          </div>
          <button className="btn" onClick={onClick} type="submit">
            Editar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Edit;
