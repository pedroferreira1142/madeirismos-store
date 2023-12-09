import React from "react";
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";

export const ProductCarousel = ({
  activeIndex,
  next,
  previous,
  product,
  onExiting,
  onExited,
  goToIndex,
}) => {
  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={product.images}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {product.images.map((item) => {
        return (
          <CarouselItem
            onExiting={onExiting}
            onExited={onExited}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{item.altText}</h5>
            </div>
          </CarouselItem>
        );
      })}
      <a
        className="carousel-control-prev"
        data-slide="prev"
        href="#pablo"
        onClick={(e) => {
          e.preventDefault();
          previous();
        }}
        role="button"
      >
        <i className="now-ui-icons arrows-1_minimal-left"></i>
      </a>
      <a
        className="carousel-control-next"
        data-slide="next"
        href="#pablo"
        onClick={(e) => {
          e.preventDefault();
          next();
        }}
        role="button"
      >
        <i className="now-ui-icons arrows-1_minimal-right"></i>
      </a>
    </Carousel>
  );
};
