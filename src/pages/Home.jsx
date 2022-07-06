import React from 'react';
import Header from '../components/Header';
import SwiperCard from '../components/SwiperCard';

function Home() {
  return (
    <section>
      <Header />
      <div className="container section_home">
        <div className="section__home">
          <h3>Meus</h3>
          <h1>Anúncios</h1>
        </div>
        <SwiperCard />
      </div>
    </section>
  );
}

export default Home;
