import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SwiperCard from '../components/SwiperCard';

function Favorites() {
  const navigate = useNavigate();

  async function locationRoute() {
    const dataU = JSON.parse(localStorage.getItem('user'));
    if (!dataU) {
      return navigate('/');
    }
    return navigate('/favorites');
  }

  useEffect(() => {
    locationRoute();
  }, [navigate]);

  return (
    <section>
      <Header />
      <div className="container section_home">
        <div className="section__home">
          <h3>Meus</h3>
          <h1>Favoritos</h1>
        </div>
        <SwiperCard isMy isFavorite />
      </div>
    </section>
  );
}

export default Favorites;
