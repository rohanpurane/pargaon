import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.scss";
import { data } from "./data";
import { LazyLoadImage } from 'react-lazy-load-image-component';







const Carousel = () => {
  return (
    <div style={{ margin: "0px" }} >
      <Slider autoplay autoplaySpeed={2000} initialSlide={2} 
        dots 
        infinite 
        customPaging={(i) => {
          return <div>
              <LazyLoadImage loading='lazy' effect='blur' src={data[i]} alt="" style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "10px",}}/>
            </div>

        }}
        dotsClass="slick-dots custom-indicator"
      >
        {data.map((item) => (
          <div style={{ borderRadius:"20px" }}>
            <img src={item} alt="" className="image-size" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
