"use client";
import { items } from "../../public/carousel.json";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

export default function ElasticCarousel() {
  const { elastic } = items;
  return (
    <div className="container">
      <div className="contWrapper">
        <Carousel breakPoints={breakPoints}>
          {elastic.map((item) => (
            <video
              key={item.id}
              className="flex justify-center items-center w-full h-80"
              src={item.imageUrl}
              controls
            ></video>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
