import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SwiperCard from '../components/SwiperCard';

function Home() {
  const navigate = useNavigate();

  async function locationRoute() {
    const { token } = JSON.parse(localStorage.getItem('user'));
    if (!token) {
      return navigate('/');
    }
    return navigate('/home');
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
        <SwiperCard isMy />
      </div>
      <div className="container section_home">
        <div className="section__home">
          <h3>Todos os</h3>
          <h1>Anúncios</h1>
        </div>
        <SwiperCard isMy={false} />
      </div>
    </section>
  );
}

export default Home;
