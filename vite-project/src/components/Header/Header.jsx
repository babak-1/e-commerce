import style from "./header.module.scss";

import hamburger from "../../assets/icon/hamburgerIcon.svg";
import personIcon from "../../assets/icon/personIcon.svg";
import heartIcon from "../../assets/icon/heartIcon.svg";
import shoppingIcon from "../../assets/icon/shoppingIcon.svg";
import telloIcon from "../../assets/icon/telloIconWord.svg";
import { Input } from "../input/Input";
import { useEffect, useState } from "react";
import NavMenu from "../NavMenu/NavMenu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createBasketThunk,
  getBasketThunk,
} from "../../Redux/actions/basketAction";

export const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const login = localStorage.getItem("customerID");
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  console.log("menim basketimde", cart);
  const basketID = localStorage.getItem("basketID");

  useEffect(() => {
    !basketID && dispatch(createBasketThunk());
    dispatch(getBasketThunk(basketID));
  }, [dispatch, cart?.basket?.total_unique_items]);

  const handleNav = () => {
    setNavOpen(true);
  };

  return (
    <div className={style.headerBiggestCont}>
      <div className={style.headerContainer}>
        <div className={style.headerWidthContainer}>
          <Link className={style.headerHambAndTelloIcon} to="/home">
            <img
              src={hamburger}
              alt="hamburger"
              className={style.hamburger}
              onClick={handleNav}
            />
            <img src={telloIcon} alt="telloIcon" className={style.telloIcon} />
          </Link>
          <div className={style.headerInputCont}>
            <Input />
          </div>
          <div className={style.headerIconsContainer}>
            <Link
              to={login ? "userprofile" : "/login"}
              className={style.iconLink}
            >
              <img
                src={personIcon}
                alt="person icon"
                className={style.personIcon}
              />
            </Link>
            <Link to="/favorites" className={style.iconLink}>
              <img
                src={heartIcon}
                alt="heart icon"
                className={style.heartIcon}
              />
            </Link>

            <Link to="/basket" className={style.iconLink}>
              <div className={style.trolleyAndCircle}>
                <img
                  src={shoppingIcon}
                  alt="shopping trolley"
                  className={style.trolleyIcon}
                />
                {cart?.loading ? (
                  <div className={style.circle}>*</div>
                ) : (
                  <div className={style.circle}>
                    {cart?.basket?.total_unique_items}
                  </div>
                )}
              </div>
            </Link>
          </div>
        </div>
        <hr className={style.greenLine} />
      </div>
      <NavMenu isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
    </div>
  );
};
