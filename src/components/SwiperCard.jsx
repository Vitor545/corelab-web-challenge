import React from 'react';
import Carousel from 'react-elastic-carousel';
import Card from './Card';

function SwiperCard() {
  return (
    <Carousel itemsToShow={2} pagination={false} className="swiper">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Carousel>
  );
}

export default SwiperCard;
