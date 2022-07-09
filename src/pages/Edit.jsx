import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { updateAnnotation } from '../lib/api';

function Edit() {
  const [nameInput, setnameInput] = useState('');
  const [marca, setMarca] = useState('');
  const [ano, setAno] = useState('');
  const [placa, setPlaca] = useState('');
  const [cor, setCor] = useState('');
  const [description, setDescription] = useState('');
  const [precoMim, setPrecoMin] = useState('');
  const [precoMax, setPrecoMax] = useState('');
  const [errorMensage, seterrorMensage] = useState('');
  const [displayNone, setdisplayNone] = useState('none');

  const navigate = useNavigate();

  async function locationRoute() {
    const { token } = JSON.parse(localStorage.getItem('user'));
    if (!token) {
      return navigate('/');
    }
    return navigate('/edit');
  }

  useEffect(() => {
    locationRoute();
  }, [navigate]);

  const onChangeClass = (target) => {
    if (target.value !== '') {
      target.classList.add('checked');
      target.classList.remove('checkedError');
    } else {
      target.classList.add('checkedError');
      target.classList.remove('checked');
    }
  };

  const onChange = ({ target }) => {
    onChangeClass(target);
    if (target.id === 'name_id') {
      setnameInput(target.value);
    } else if (target.id === 'marca_id') {
      setMarca(target.value);
    } else if (target.id === 'ano_id') {
      setAno(target.value);
    } else if (target.id === 'placa_id') {
      setPlaca(target.value);
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
    const { token } = JSON.parse(localStorage.getItem('user'));
    const request = await updateAnnotation(
      nameInput,
      marca,
      cor,
      placa,
      ano,
      description,
      precoMim,
      precoMax,
      1,
      token
    );

    if (typeof request === 'string') {
      seterrorMensage(request);
      setdisplayNone('flex');
    } else {
      setdisplayNone('none');
    }
  };
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
        <div className="ms_gerror" style={{ display: displayNone }}>
          <span>{errorMensage}</span>
        </div>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div className="fieldOne input">
            <label htmlFor="name_id">
              Nome
              <input
                type="text"
                onChange={onChange}
                placeholder="Coloque o nome"
                id="name_id"
              />
            </label>
            <label htmlFor="marca_id">
              Marca
              <input
                type="text"
                onChange={onChange}
                placeholder="Coloque a marca"
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
                onChange={onChange}
                max={2022}
                min={1885}
              />
            </label>
            <label htmlFor="placa_id">
              Placa
              <input
                type="text"
                onChange={onChange}
                placeholder="Coloque a placa"
                id="placa_id"
              />
            </label>
            <label htmlFor="cor_id">
              Cor do Veículo
              <input type="color" onChange={onChange} id="cor_id" />
            </label>
          </div>
          <div className="field input password">
            <label htmlFor="descrição_id">
              Descrição
              <textarea
                id="descrição_id"
                name="description"
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
