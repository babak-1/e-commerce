import React from "react";
import style from "./Basket.module.scss";
import shoppingCart from "../../assets/image/shopping-cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ThreeCircles from "react-spinners/ClipLoader";

import deleteIcon from "../../assets/image/delete.svg";
import {
  deleteBasketThunk,
  updateCartData,
} from "../../Redux/actions/basketAction";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const { cart } = useSelector((state) => state);
  console.log("bu basqa basket", cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (itemId, quantity, kind) => {
    if (kind === "minus") {
      if (quantity > 0) {
        quantity = quantity - 1;
      }
    } else {
      quantity = quantity + 1;
    }
    dispatch(updateCartData({ quantity, itemId }));
  };

  const handleDelete = (id) => {
    dispatch(deleteBasketThunk(id));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.BasketCont}>
      <p className={style.count}>
        Səbət (<span>{cart?.basket?.total_unique_items}</span> məhsul)
      </p>
      {cart?.basket?.total_items <= 0 ? (
        <div className={style.emptyBasket}>
          <img src={shoppingCart} />
          <p className={style.emptyBasketText}>Səbətiniz halhazırda boşdur</p>
          <button className={style.btn} onClick={() => navigate("/")}>
            Alış-verişə davam et
          </button>
        </div>
      ) : (
        <div className={style.fullBasketCont}>
          {cart?.loading ? (
            <div className={style.loading}>
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
          ) : (
            <ul className={style.cardsList}>
              {cart?.basket?.line_items?.map((product) => {
                return (
                  <li className={style.basketCard} key={product?.id}>
                    <img
                      src={product?.image?.url}
                      alt=""
                      className={style.image}
                    />
                    <div className={style.cardDetail}>
                      <p>{product?.name}</p>
                      <div className={style.counterAndOther}>
                        <div className={style.colorAndPrice}>
                          <div className={style.colorCont}>
                            <h4 className={style.colorText}>Rəng:</h4>
                            <h4 className={style.realColor}>Bənövşəyi</h4>
                          </div>
                          <h3>{product?.price?.raw}AZN</h3>
                        </div>
                        <div className={style.countProductCont}>
                          <div
                            className={style.btnCount}
                            onClick={() =>
                              handleUpdate(
                                product?.id,
                                product?.quantity,
                                "minus"
                              )
                            }
                          >
                            -
                          </div>
                          <input
                            type="text"
                            value={product?.quantity}
                            className={style.countValue}
                          />
                          <div
                            className={style.btnCount}
                            onClick={() =>
                              handleUpdate(
                                product?.id,
                                product?.quantity,
                                "plus"
                              )
                            }
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>

                    <img
                      src={deleteIcon}
                      alt=""
                      className={style.deleteBtn}
                      onClick={() => {
                        handleDelete({ productId: product?.id });
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          )}

          <div className={style.balance}>
            <h1>Ümumi</h1>
            <ul>
              <li>
                <h2>Məbləğ </h2> <p>{cart?.basket?.subtotal?.raw} AZN</p>
              </li>
              <li>
                <h2>Çatdırılma</h2> <p>0.00</p>
              </li>
              <li>
                <h2>Hədiyyə paketi</h2> <p>0.00</p>
              </li>
              <li>
                <h2>Promo kod</h2> <p>0.00</p>
              </li>
              <hr />
              <li>
                <h2>Cəmi</h2>{" "}
                <p className={style.totalBalance}>
                  {cart?.basket?.subtotal?.raw} AZN
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
