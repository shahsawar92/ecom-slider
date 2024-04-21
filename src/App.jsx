import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import assets from "./assets/assets";
import Products from "./products";
import SingleCat from "./singleCat";

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
    {
      name: "tech 4",
      image: assets.tech1,
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
        onAnimationStart={(swiper) => {
          swiper.params.speed = 3000;
          swiper.update();
        }}
        slideToClickedSlide={true}
        pagination={{
          clickable: false,
        }}
        centeredSlides={true}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        onSlideChange={handleSlideChange}>
        <SwiperSlide>
          {/* <img className='imageStyle' src={assets.m} /> */}
          <SingleCat assets={masks} index={0} activeSlide={activeSlide} />
        </SwiperSlide>
        <SwiperSlide>
          {/* <img className='imageStyle' src={assets.a} /> */}
          <SingleCat assets={dec} index={1} activeSlide={activeSlide} />
        </SwiperSlide>
        <SwiperSlide>
          {/* <img className='imageStyle' src={assets.d} /> */}
          {/* <Products index={2} activeSlide={activeSlide} assets={tshirts} /> */}
          <SingleCat assets={tshirts} index={2} activeSlide={activeSlide} />
          {/* <Swiper
            className='mySwiper swiper-h'
            spaceBetween={0}
            allowSlideNext={true}
            allowSlidePrev={true}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            // onSlideChange={(swiper) => handleSlideChange(swiper)}
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
          </Swiper> */}
        </SwiperSlide>
        <SwiperSlide>
        {/* <img className='imageStyle' src={assets.tech} alt='' /> */}
        <SingleCat assets={tech} index={3} activeSlide={activeSlide} />
        {/* <Products index={3} activeSlide={activeSlide} assets={tech} /> */}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
