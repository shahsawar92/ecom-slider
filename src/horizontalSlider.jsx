import Slider from "react-slick";

export default function HorizontalSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    centerFontSize: "50px",
    swipe: true,
    focusOnSelect: true,
  };
  return (
    <Slider {...settings}>
      <div className='custom-slide'>
        <h3>1</h3>
      </div>
      <div className='custom-slide'>
        <h3>2</h3>
      </div>
      <div className='custom-slide'>
        <h3>3</h3>
      </div>
      <div className='custom-slide'>
        <h3>4</h3>
      </div>
      <div className='custom-slide'>
        <h3>5</h3>
      </div>
      <div className='custom-slide'>
        <h3>6</h3>
      </div>
    </Slider>
  );
}
