import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SwiperCard from '../components/SwiperCard';
import { getAllAnnotation } from '../lib/api';

function Home() {
  const [getAAnnotation, setgetAllAnnotation] = useState([]);

  const navigate = useNavigate();

  async function locationRoute() {
    const { token } = JSON.parse(localStorage.getItem('user'));
    if (!token) {
      return navigate('/');
    }
    const allA = await getAllAnnotation(token);
    if (typeof allA === 'string') {
      return navigate('/');
    }
    return setgetAllAnnotation(allA);
  }

  useEffect(() => {
    locationRoute();
  }, [navigate]);

  return (
    <section>
      <Header typeIcon="fa-solid fa-heart" path="/favorites" />
      <div className="container section_home">
        <div className="section__home">
          <h3>Meus</h3>
          <h1>Anúncios</h1>
        </div>
        <SwiperCard />
      </div>
      <div className="container section_home">
        <div className="section__home">
          <h3>Todos os</h3>
          <h1>Anúncios</h1>
        </div>
        <SwiperCard />
      </div>
    </section>
  );
}

export default Home;
