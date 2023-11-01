import './mainSlider.scss';
import {sliderImgs} from '../../utils/img';
//slick-slider
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function MainSlider() {
    let settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className="slider">
        <div className="container">
            <div className='slider-content overflow-x-hidden'></div>
                <Slider {...settings}>
                    {sliderImgs.map((slide, i) => {
                        return (<div key={i} className="slider-item">
                        <img src={slide}  alt="slideimage" />
                    </div>
                    )
                    })}

                </Slider>
        </div>
    </div>
  )
}

export default MainSlider