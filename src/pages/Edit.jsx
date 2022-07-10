import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import { updateAnnotation, getOneAnnotation } from '../lib/api';
import Loading from '../components/Loading';

function Edit() {
  const [nameInput, setnameInput] = useState('');
  const [marca, setMarca] = useState('');
  const [ano, setAno] = useState('');
  const [placa, setPlaca] = useState('');
  const [cor, setCor] = useState('');
  const [descriptionState, setDescription] = useState('');
  const [precoMim, setPrecoMin] = useState('');
  const [precoMax, setPrecoMax] = useState('');
  const [errorMensage, seterrorMensage] = useState('');
  const [displayNone, setdisplayNone] = useState('none');
  const [isLoad, setIsLoad] = useState(true);

  const navigate = useNavigate();
  const { ids } = useParams();

  const onHome = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const data = await getOneAnnotation(ids, token);
    if (typeof data === 'string') {
      return navigate('/home');
    }
    setnameInput(data.name);
    setMarca(data.brand);
    setAno(data.year);
    setPlaca(data.board);
    setCor(data.color);
    setDescription(data.description);
    setPrecoMin(data.priceMin);
    setPrecoMax(data.priceMax);
    setIsLoad(false);
    return navigate(`/edit/${ids}`);
  };

  async function locationRoute() {
    const dataU = JSON.parse(localStorage.getItem('user'));
    if (!dataU) {
      return navigate('/');
    }
    return onHome();
  }

  useEffect(() => {
    locationRoute();
  }, []);

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
    const { token, id } = JSON.parse(localStorage.getItem('user'));
    const request = await updateAnnotation(
      nameInput,
      marca,
      cor,
      placa,
      ano,
      descriptionState,
      precoMim,
      precoMax,
      id,
      token,
      ids
    );

    if (typeof request === 'string') {
      seterrorMensage(request);
      setdisplayNone('flex');
      return navigate(`/edit/${ids}`);
    }
    setdisplayNone('none');
    return navigate('/home');
  };
  return isLoad ? (
    <Loading />
  ) : (
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
            <label htmlFor="placa_id">
              Placa
              <input
                type="text"
                onChange={onChange}
                value={placa}
                placeholder="Coloque a placa"
                id="placa_id"
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
