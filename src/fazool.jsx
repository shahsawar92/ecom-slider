import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import assets from "./assets/assets";
import Products from "./products";

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex;
    const adjustedIndex = realIndex % tshirts.length;
    setActiveSlide(adjustedIndex);
  };

  const handleSlideClick = (swiper, index) => {
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  const tech = [
    {
      name: "tech 1",
      image: assets.tech,
    },
    {
      name: "tech 2",
      image: assets.tech1,
    },
    {
      name: "tech 3",
      image: assets.tech2,
    },
  ];

  const tshirts = [
    {
      name: "T-Shirt",
      image: assets.a,
    },
    {
      name: "T-Shirt 1",
      image: assets.a1,
    },
    {
      name: "T-Shirt 2",
      image: assets.a2,
    },
    {
      name: "T-Shirt 3",
      image: assets.a3,
    },
  ];

  const masks = [
    {
      name: "Mask",
      image: assets.m,
    },
    {
      name: "Mask 1",
      image: assets.m4,
    },
    {
      name: "Mask 2",
      image: assets.m2,
    },
    {
      name: "Mask 3",
      image: assets.m3,
    },
  ];
  const dec = [
    {
      name: "Decor",
      image: assets.d,
    },
    {
      name: "Decor 1",
      image: assets.d1,
    },
    {
      name: "Decor 2",
      image: assets.d2,
    },
    {
      name: "Decor 3",
      image: assets.d3,
    },
  ];
  return (
    <>
      <Swiper
        className='mySwiper2 swiper-v'
        direction={"vertical"}
        slidesPerView={3}
        loop={true}
        initialSlide={2}
        pagination={{
          clickable: false,
        }}
        centeredSlides={true}
        onSlideChange={handleSlideChange}>
        {tshirts.map((shirt, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                height: "calc(100vh/3)",
                width: "100vw",
                overflow: index === activeSlide ? "visible" : "hidden", // Adjust overflow
              }}>
              <Products
                index={index}
                activeSlide={activeSlide}
                assets={tshirts}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
