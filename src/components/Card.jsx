import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteAnnotation, createFavorite, deleteFavorite } from '../lib/api';

function Card({
  id,
  name,
  brand,
  color,
  description,
  priceMax,
  priceMin,
  year,
}) {
  const [isSun, setIsSun] = useState('night');
  const [isDarkColor, setisDarkColor] = useState('cardColor');
  const [isScrollBar, setisScrollBar] = useState('cardScrol');
  const [isBallDark, setisBallDark] = useState('white');
  const [isCinzaDark, setisCinzaDark] = useState('description_card');
  const [sunNight, setsunNight] = useState('fa-solid fa-moon');
  const [hearthClick, sethearthClick] = useState('fa-regular fa-heart');

  const navigate = useNavigate();

  const isFavorite = async () => {
    const dataU = JSON.parse(localStorage.getItem('user'));
    if (hearthClick === 'fa-regular fa-heart') {
      sethearthClick('fa-solid fa-heart');
      await createFavorite(dataU.id, id, dataU.token);
    } else {
      sethearthClick('fa-regular fa-heart');
      await deleteFavorite(dataU.id, id, dataU.token);
    }
  };

  const isVisibleFunction = () => {
    if (isSun === 'sun') {
      setIsSun('night');
      setisDarkColor('cardColor');
      setisScrollBar('cardScrol');
      setisBallDark('white');
      setisCinzaDark('description_card');
      setsunNight('fa-solid fa-moon');
    } else {
      setIsSun('sun');
      setisDarkColor('cardColorDark');
      setisScrollBar('cardScrolDark');
      setisBallDark('black');
      setisCinzaDark('description_cardDark');
      setsunNight('fa-solid fa-sun');
    }
  };

  const isDelete = async () => {
    const dataU = JSON.parse(localStorage.getItem('user'));
    const deleteA = await deleteAnnotation(dataU.id, dataU.token, id);
    if (typeof deleteA === 'string') {
      return toast.error(deleteA, {
        position: toast.POSITION.TOP_RIGHT,
        pauseOnHover: false,
        closeOnClick: true,
      });
    }
    return window.location.reload();
  };

  const isEdit = (idEdit) => navigate(`/edit/${idEdit}`);

  return (
    <div
      className={`card ${isScrollBar} ${isDarkColor}`}
      style={{ background: color }}
    >
      <div className="card__header">
        <div className="card__header_dados">
          <div>{year}</div>
          <div>&bull;</div>
          <div className="card__marca">{brand}</div>
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
              stroke={`${isBallDark}`}
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <h1 className="card__name">{name}</h1>
      <div className="card__description">
        <div>Descrição:</div>
        <p className={`${isCinzaDark}`}>{description}</p>
      </div>
      <div className="card__price">
        <div>Preço:</div>
        <div className="price_card">
          <div>R${priceMin}</div>
          <div>&bull;</div>
          <div>R${priceMax}</div>
        </div>
      </div>
      <div className="card__button">
        <div onClick={isDelete}>
          <i className="fa-solid fa-xmark" />
        </div>
        <div onClick={isVisibleFunction}>
          <i className={`${sunNight}`} />
        </div>
        <div onClick={isFavorite}>
          <i className={`${hearthClick}`} />
        </div>
        <div onClick={() => isEdit(id)}>
          <i className="fa-solid fa-pen" />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  brand: PropTypes.string,
  color: PropTypes.string,
  description: PropTypes.string,
  priceMax: PropTypes.string,
  priceMin: PropTypes.string,
  year: PropTypes.string,
}.isRequired;

export default Card;
