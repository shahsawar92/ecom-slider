import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import assets from "./assets/assets";

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [transitionDuration, setTransitionDuration] = useState(0.3); // Transition duration in seconds

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
    swiper.slideTo(swiper.activeIndex, 300);
    setTransitionDuration(0.3); // Set transition duration to default value
  };

  const handleSlideClick = (swiper, index) => {
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  return (
    <>
      <Swiper
        className='mySwiper2 swiper-v'
        direction={"vertical"}
        slidesPerView={3}
        initialSlide={2}
        pagination={{
          clickable: false,
        }}
        centeredSlides={true}
        onSlideChange={handleSlideChange}>
        <SwiperSlide>
          <Swiper
            className={`mySwiper`}
            spaceBetween={100}
            slidesPerView={activeSlide === 0 ? 3 : 1}
            centeredSlides={true}
            loop={true}
            allowSlideNext={activeSlide === 0}
            allowSlidePrev={activeSlide === 0}
            style={{ transition: `slidesPerView 5s` }}
            pagination={{
              clickable: false,
            }}>
            <SwiperSlide>
              <img className='imageStyle' src={assets.a} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='imageStyle' src={assets.a1} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='imageStyle' src={assets.a2} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='imageStyle' src={assets.a3} alt='' />
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <Swiper
            className={`mySwiper `}
            spaceBetween={100}
            slidesPerView={activeSlide === 1 ? 3 : 1}
            centeredSlides={true}
            loop={true}
            allowSlideNext={activeSlide === 1}
            allowSlidePrev={activeSlide === 1}
            pagination={{
              clickable: false,
            }}>
            <SwiperSlide>
              <img className='imageStyle' src={assets.m} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='imageStyle' src={assets.m1} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='imageStyle' src={assets.m2} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='imageStyle' src={assets.m3} alt='' />
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <Swiper
            className='mySwiper'
            spaceBetween={100}
            allowSlideNext={activeSlide === 2}
            allowSlidePrev={activeSlide === 2}
            slidesPerView={activeSlide === 2 ? 3 : 1}
            centeredSlides={true}
            loop={true}
            style={{ transition: `slidesPerView 5s` }}
            pagination={{
              clickable: false,
            }}>
            <SwiperSlide>
              <img className='imageStyle' src={assets.g} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='imageStyle' src={assets.g1} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='imageStyle' src={assets.g2} alt='' />
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <Swiper
            className='mySwiper '
            spaceBetween={100}
            slidesPerView={activeSlide === 3 ? 3 : 1}
            centeredSlides={true}
            allowSlideNext={activeSlide === 3}
            allowSlidePrev={activeSlide === 3}
            pagination={{
              clickable: false,
            }}>
            <div
              className={`overlay ${activeSlide !== 0 ? "hidden" : ""}`}></div>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide onClick={(e) => handleSlideClick(e.target.swiper, 2)}>
              Slide 3
            </SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
