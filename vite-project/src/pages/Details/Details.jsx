import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import style from "./Details.module.scss";
// import { addBasket, createBasket, getDetails } from "../../API/productAPI";
import { useParams } from "react-router-dom";
import { getDetails } from "../../API/productAPI";
import ProductDetailSlider from "../../components/DetailsSlider/DetailSlider";
import { useDispatch, useSelector } from "react-redux";
import { addBasketThunk } from "../../Redux/actions/basketAction";
import ThreeCircles from "react-spinners/ClipLoader";

const Details = () => {
  const productID = useParams()?.id;
  const [productInfo, setProductInfo] = useState(null);
  const [detailIndex, setDetailIndex] = useState(0);
  const [memoryIndex, setMemoryIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  // addBasket
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  console.log("cart-im", cart);

  const handleSubmit = async () => {
    dispatch(
      addBasketThunk({
        product_id: productID,
        quantity,
      })
    );
  };

  const sliderImages = productInfo?.variant_groups?.[0]?.options[
    detailIndex
  ]?.assets.map((id) => productInfo.assets.find((el) => el.id === id));

  // const withoutVariant = productInfo?.assets.map((product) => product.url);
  // console.log(withoutVariant, "without");

  console.log(productInfo?.variant_groups?.[1]?.options, "helebelement");

  const handleColor = (index) => {
    setDetailIndex(index);
  };

  const handleMemory = (index) => {
    setMemoryIndex(index);
  };

  // counter
  const [quantity, setQuantity] = useState(1);
  const handleDecrement = () => {
    quantity > 0 && setQuantity(quantity - 1);
  };
  const handleIncrement = () => {
    quantity < productInfo?.inventory?.available && setQuantity(quantity + 1);
  };

  // console.log(productInfo.inventory.available);

  useEffect(() => {
    async function productDetails() {
      setLoading(true);
      try {
        const res = await getDetails(productID);
        setProductInfo(res?.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    productDetails();
  }, [productID]);

  // scroll

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(productInfo, "result product info");
  console.log(productID, "productID");

  return !loading ? (
    <div className={style.detailsContainer}>
      <Breadcrumb />
      <div className={style.swiperAndDetailsCont}>
        <div className={style.swiperCont}>
          <ProductDetailSlider
            productInfo={productInfo}
            sliderImages={sliderImages}
          />
        </div>
        <div className={style.productDetails}>
          <h1>
            {productInfo?.name === undefined
              ? ""
              : productInfo?.name +
                " " +
                (productInfo?.variant_groups?.[1]?.options?.[memoryIndex]
                  .name !== undefined
                  ? productInfo?.variant_groups?.[1]?.options?.[memoryIndex]
                      .name
                  : "")}
          </h1>
          <div className={style.ratingAndComments}>
            <img src="" alt="" />
            <h4>(226)</h4>
            <div className={style.yLine}></div>
            <h3>57 rəy</h3>
          </div>
          <div>
            {productInfo?.variant_groups?.[1]?.options?.[memoryIndex]?.price
              .formatted_with_code || productInfo?.price?.formatted_with_symbol}
          </div>
          <div className={style.xLine}></div>
          <div className={style.colorSelect}>
            <h3 className={style.colorWord}>Reng:</h3>
            <div className={style.chooseColor}>
              {productInfo?.variant_groups?.[0]?.options?.map(
                (color, index) => (
                  <span
                    key={index}
                    className={style.colorCircle}
                    style={{ backgroundColor: color.name }}
                    onClick={handleColor.bind(null, index)}
                  >
                    {index === detailIndex && (
                      <span className={style.activeColor}></span>
                    )}
                  </span>
                )
              )}
            </div>
          </div>

          <div className={style.xLine}></div>

          {productInfo?.variant_groups?.[1]?.name === "memory" ? (
            <div className={style.memorySelect}>
              <h3 className={style.memoryChoose}>Yaddaş:</h3>
              <div className={style.memoryCont}>
                {productInfo?.variant_groups?.[1]?.options?.map(
                  (memory, index) => (
                    <span
                      key={index}
                      onClick={handleMemory.bind(null, index)}
                      className={`${style.memoryBtn} ${
                        index === memoryIndex ? style.activeMemoryBtn : ""
                      }`}
                    >
                      {memory?.name}
                    </span>
                  )
                )}
              </div>
            </div>
          ) : (
            ""
          )}
          <div className={style.countWordAndCounter}>
            <h4>Miqdar</h4>
            <div className={style.countProductCont}>
              <div className={style.btnCount} onClick={handleDecrement}>
                -
              </div>
              <input
                type="text"
                value={quantity}
                className={style.countValue}
              />
              <div className={style.btnCount} onClick={handleIncrement}>
                +
              </div>
            </div>
          </div>

          <button className={style.btnBasket} onClick={handleSubmit}>
            Səbətə at
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className={style.loadingCont}>
      <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

export default Details;
