import React, { useState, useEffect } from "react";
import "./PhoneSlider.scss";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { getProducts } from "../../API/productAPI";
import SliderCard from "../SpecialCard/SliderCard";
import aznIconBlack from "../../assets/icon/aznIconBlack.svg";
import BlogItem from "../Skeleton/Skeleton";

const PhoneSlider = ({ headertxt, category }) => {
  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState([]);

  // console.log(loading, "loading");

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await getProducts(4, category);
        const products = await response?.data?.data;

        setProducts(products);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };

    getData();
  }, [category]);

  if (loading) {
    return (
      <div className={"skeletonCont"}>
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <BlogItem />
          </SwiperSlide>
          <SwiperSlide>
            <BlogItem />
          </SwiperSlide>
          <SwiperSlide>
            <BlogItem />
          </SwiperSlide>
          <SwiperSlide>
            <BlogItem />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
  return (
    <div className={"cont"}>
      <h2 className={"header"}>{headertxt}</h2>
      <Swiper
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          600: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {products?.map((product) => (
          <SwiperSlide key={product.id}>
            <SliderCard
              text={product.name}
              price={product.price.formatted}
              isPrice
              isSliderCard
              phonePic={product.image.url}
              id={product.id}
              aznIconBlack={aznIconBlack}
              product={product}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Link
        to={`/products${category ? "/" + category : ""}`}
        className={"viewAllBtn"}
      >
        <h4>hamisina bax</h4>
      </Link>
    </div>
  );
};

export default PhoneSlider;
