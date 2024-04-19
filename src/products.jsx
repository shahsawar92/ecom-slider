import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
export default function Products({ index, activeSlide, assets }) {
  const isactive = activeSlide === index;
  const [activeCategoryIndex, setActiveCategoryIndex] = React.useState(0);
  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex;
    const adjustedIndex = realIndex % assets.length;
    setActiveCategoryIndex(adjustedIndex);
    // setActiveSlide(adjustedIndex);
    console.log(adjustedIndex, "adjustedIndex");
  };

  return (
    <Swiper
      className='mySwiper'
      spaceBetween={100}
      allowSlideNext={isactive}
      allowSlidePrev={isactive}
      slidesPerView={isactive ? 3 : 1}
      centeredSlides={true}
      loop={true}
      onSlideChange={(swiper) => handleSlideChange(swiper)}
      style={{ transition: `slidesPerView 5s` }}
      pagination={{
        clickable: false,
      }}>
      {assets?.map((asset, index) => (
        <SwiperSlide key={index}>
          <img className='imageStyle' src={asset.image} alt='' />
          {isactive && activeCategoryIndex === index && <p>{asset.name}</p>}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
