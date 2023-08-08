import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import "./Partners.scss"

import partner1 from "../../assets/image/partner1.svg"
import partner2 from "../../assets/image/partner2.svg"
import partner3 from "../../assets/image/partner3.svg"
import partner4 from "../../assets/image/partner4.svg"
import partner5 from "../../assets/image/partner5.svg"
import partner6 from "../../assets/image/partner6.svg"

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 6,

      
    };
    return (
      <div className="container">
        <Slider {...settings}>
          

          <div>
              <div className="item">
                <img src={partner1} alt="" />{" "}
              </div>
          </div>
          <div>
              <div className="item">
                <img src={partner2} alt="" />{" "}
              </div>
          </div>
          <div>
              <div className="item">
                <img src={partner3} alt="" />{" "}
              </div>
          </div>
          <div>
              <div className="item">
                <img src={partner4} alt="" />{" "}
              </div>
          </div>
          <div>
              <div className="item">
                <img src={partner5} alt="" />{" "}
              </div>
          </div>
          <div>
              <div className="item">
                <img src={partner6} alt="" />{" "}
              </div>
          </div>
          <div>
              <div className="item">
                <img src={partner1} alt="" />{" "}
              </div>
          </div>
          <div>
              <div className="item">
                <img src={partner2} alt="" />{" "}
              </div>
          </div>
          <div>
              <div className="item">
                <img src={partner3} alt="" />{" "}
              </div>
          </div>
          <div>
              <div className="item">
                <img src={partner4} alt="" />{" "}
              </div>
          </div>
          <div>
              <div className="item">
                <img src={partner5} alt="" />{" "}
              </div>
          </div>
          <div>
            <div className="item">
              <img src={partner6} alt="" />{" "}
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}