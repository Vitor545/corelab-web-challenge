import React, { useState } from 'react';
import Header from '../components/Header';

function Home() {
  const [isSun, setIsSun] = useState('sun');
  const [sunNight, setsunNight] = useState('fa-solid fa-sun');

  const isVisibleFunction = () => {
    if (isSun === 'sun') {
      setIsSun('night');
      setsunNight('fa-solid fa-moon');
    } else {
      setIsSun('sun');
      setsunNight('fa-solid fa-sun');
    }
  };
  return (
    <section>
      <Header />
      <div className="container section_home">
        <div className="section__home">
          <h3>Meus</h3>
          <h1>Anúncios</h1>
        </div>
        <div className="card cardScrol cardColor">
          <div className="card__header">
            <div className="card__header_dados">
              <div>2020</div>
              <div>&bull;</div>
              <div>Toyota</div>
            </div>
            <div className="card__header_cor">
              <div>Cor</div>
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="4.5"
                  cy="4.5"
                  r="3.5"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <h1 className="card__name">Gol</h1>
          <div className="card__description">
            <div>Descrição:</div>
            <p className="description_card">
              Carro espaçoso e confortavel, economico e nunca deu problema Carro
              espaçoso e confortavel, economico e nunca deu problema Carro
              espaçoso e confortaveçfggdf
            </p>
          </div>
          <div className="card__price">
            <div>Preço:</div>
            <div>
              <div>R$85.000,00</div>
              <div>&bull;</div>
              <div>R$150.000,00</div>
            </div>
          </div>
          <div className="card__button">
            <div>
              <i className="fa-solid fa-xmark" />
            </div>
            <div onClick={isVisibleFunction}>
              <i className={`${sunNight}`} />
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
