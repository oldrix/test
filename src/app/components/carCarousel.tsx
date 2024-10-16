import Slider from "react-slick";
import Image from "next/image";

interface ICarCarouselProps {
  images: string[];
}

import React from "react";

export default function CarCarousel({ images }: ICarCarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dotsClass: "slick-dots slick-thumb",
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={876}
              height={719}
              layout="responsive"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
