import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.scss";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const ProductDetailSlider = ({ productInfo, sliderImages }) => {
  // console.log(productInfo, "anotjher page");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // console.log(sliderImages, "konsolaadadad");

  // console.log(productInfo.assets.length - 1, "assets");
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "black",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiperDetails2"
      >
        {sliderImages?.map((product) => {
          return (
            <SwiperSlide key={product?.id}>
              <img src={product?.url} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiperDetails"
      >
        {sliderImages?.map((product) => {
          return (
            <SwiperSlide key={product?.id}>
              <img src={product?.url} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ProductDetailSlider;
