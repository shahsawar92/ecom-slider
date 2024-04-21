import React from "react";
// import assets from "./assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
export default function SingleCat({ assets, index, activeSlide }) {
  console.log("active slide index: ", activeSlide);
  console.log("index normal:", index);
  const isActive = index === activeSlide;
  const [activeProductIndex, setActiveProductIndex] = React.useState(0);
  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex;
    const adjustedIndex = realIndex % assets.length;
    setActiveProductIndex(adjustedIndex);
  };
  return (
    <>
      <Swiper
        className='mySwiper swiper-h'
        spaceBetween={0}
        allowSlideNext={isActive}
        allowSlidePrev={isActive}
        slidesPerView={isActive ? 3 : 1}
        centeredSlides={true}
        slideToClickedSlide={true}
        style={{
          height: isActive ? "100%" : "120%",
        }}
        loop={true}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        pagination={{
          clickable: false,
        }}>
        {assets?.map((eachAsset, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignContent: "center",
            }}>
            <img className='imageStyle' src={eachAsset.image} alt='' />
            <div
              style={{
                textAlign: "center",
                marginTop: "-1.7rem",
              }}>
              {isActive && activeProductIndex === index && (
                <p
                  style={{
                    fontSize: "1.1rem",
                  }}>
                  {eachAsset.name}
                </p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
