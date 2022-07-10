import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import { getAllAnnotation } from '../lib/api';
import SearchUtil from '../utils/SearchUtil';
import Loading from './Loading';
import SearchCards from './SearchCards';

function Search() {
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
    const final = SearchUtil(allAnnotation, values);
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
          <h1>{values}</h1>
        </div>
        {isLoad ? <Loading /> : <SearchCards allAnnotations={allAnnotations} />}
      </div>
    </section>
  );
}

export default Search;
