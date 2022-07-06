import React from 'react';
import Header from '../components/Header';
import Elipse from '../img/elipsecor.png';

function Home() {
  return (
    <section>
      <Header />
      <div className="container section_home">
        <div className="section__home">
          <h3>Meus</h3>
          <h1>Anúncios</h1>
        </div>
        <div className="card">
          <div className="card__header">
            <div>
              <span>2020</span>
              <span>Toyota</span>
            </div>
            <div>
              <span>Cor</span>
              <img src={Elipse} alt="elipse" />
            </div>
          </div>
          <h1 className="card__name">Gol</h1>
          <div className="card__description">
            <div>Descrição</div>
            <p>
              Carro espaçoso e confortavel, economico e nunca deu problema Carro
              espaçoso e confortavel, economico e nunca deu problema Carro
              espaçoso e confortaveçfggdf
            </p>
          </div>
          <div>
            <div>Preço</div>
            <span>R$85.000,00</span>
            <span>R$150.000,00</span>
          </div>
          <div>
            <div>
              <i className="fa-solid fa-xmark" />
            </div>
            <div>
              <i className="fa-solid fa-pen" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
