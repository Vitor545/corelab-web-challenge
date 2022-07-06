import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';

function Home() {
  return (
    <section>
      <Header />
      <div className="container section_home">
        <div className="section__home">
          <h3>Meus</h3>
          <h1>Anúncios</h1>
        </div>
        <Card />
      </div>
    </section>
  );
}

export default Home;
