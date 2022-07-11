import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import { getAllAnnotation } from '../lib/api';
import * as Search from '../utils/SearchUtil';
import Loading from './Loading';
import SearchCards from './SearchCards';

function SearchFIlter() {
  const [allAnnotations, setallAnnotations] = useState('');
  const [isLoad, setisLoad] = useState(true);
  const { values } = useParams();

  const navigate = useNavigate();

  async function locationSearch() {
    const dataU = JSON.parse(localStorage.getItem('user'));
    if (!dataU) {
      return navigate('/');
    }
    const allAnnotation = await getAllAnnotation(dataU.token);
    if (typeof allAnnotation === 'string') {
      return navigate('/');
    }
    const obj = JSON.parse(values);
    const final = Search.SearchFIltro(allAnnotation, obj);
    setallAnnotations(final);
    return setisLoad(false);
  }

  useEffect(() => {
    locationSearch();
  }, []);

  return (
    <section>
      <Header />
      <div className="container section_home">
        <div className="section__home">
          <h3>Você pesquisou por</h3>
          <h1>Parâmetros</h1>
        </div>
        {isLoad ? <Loading /> : <SearchCards allAnnotations={allAnnotations} />}
      </div>
    </section>
  );
}

export default SearchFIlter;
