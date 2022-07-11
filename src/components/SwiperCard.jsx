import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from './Card';
import Loading from './Loading';
import { getInfoUserapi, getAllAnnotation } from '../lib/api';

function SwiperCard({ isMy = true, isFavorite }) {
  const [getUserAnnotation, setgetUserAnnotation] = useState([]);
  const [getAAnnotation, setgetAllAnnotation] = useState([]);
  const [isLoad, setisLoad] = useState(true);

  const navigate = useNavigate();

  async function getInfoUser() {
    const dataU = JSON.parse(localStorage.getItem('user'));
    if (!dataU) {
      return navigate('/');
    }
    const { token, id } = dataU;
    const allAU = await getInfoUserapi(id, token);
    const allA = await getAllAnnotation(token);
    if (typeof allA === 'string' || allAU === 'string') {
      return navigate('/');
    }
    setgetAllAnnotation(allA);
    setgetUserAnnotation(allAU);
    return setisLoad(false);
  }

  useEffect(() => {
    getInfoUser();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 680, itemsToShow: 3, itemsToScroll: 2, pagination: false },
    { width: 1200, itemsToShow: 5, itemsToScroll: 2, pagination: false },
  ];

  const isFavorites = (stg) => {
    if (stg) {
      return getUserAnnotation.favoritos.map(
        ({ id, name, brand, color, description, priceMax, priceMin, year }) => (
          <Card
            id={id}
            name={name}
            brand={brand}
            color={color}
            description={description}
            priceMax={priceMax}
            priceMin={priceMin}
            year={year}
          />
        )
      );
    }
    return getUserAnnotation.user.map(
      ({ id, name, brand, color, description, priceMax, priceMin, year }) => (
        <Card
          id={id}
          name={name}
          brand={brand}
          color={color}
          description={description}
          priceMax={priceMax}
          priceMin={priceMin}
          year={year}
        />
      )
    );
  };

  return isLoad ? (
    <Loading />
  ) : (
    <Carousel breakPoints={breakPoints} pagination={false} className="swiper">
      {!isMy
        ? getAAnnotation.map(
            ({
              id,
              name,
              brand,
              color,
              description,
              priceMax,
              priceMin,
              year,
            }) => (
              <Card
                id={id}
                name={name}
                brand={brand}
                color={color}
                description={description}
                priceMax={priceMax}
                priceMin={priceMin}
                year={year}
              />
            )
          )
        : isFavorites(isFavorite)}
    </Carousel>
  );
}

SwiperCard.propTypes = {
  isMy: PropTypes.bool,
}.isRequired;

export default SwiperCard;
