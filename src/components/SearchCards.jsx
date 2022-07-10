import React from 'react';
import Carousel from 'react-elastic-carousel';
import PropTypes from 'prop-types';
import Card from './Card';

function SearchCards({ allAnnotations }) {
  return (
    <Carousel itemsToShow={2} pagination={false} className="swiper">
      {allAnnotations.map(
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
      )}
    </Carousel>
  );
}

SearchCards.propTypes = {
  allAnnotations: PropTypes.array,
}.isRequired;

export default SearchCards;
