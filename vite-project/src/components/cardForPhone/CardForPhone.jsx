import React from "react";
import aznIcon from "../../assets/icon/aznIcon.svg";
import style from "./CardForPhone.module.scss";
import aznIconRed from "../../assets/icon/aznIconRed.svg";
import aznIconBlack from "../../assets/icon/aznIconBlack.svg";
import { Link } from "react-router-dom";

const CardForPhone = ({
  text,
  price,
  btntxt,
  phonePic,
  bgColor,
  arrowIcon,
  linktxt,
  countTxt,
  isAdCard,
  rowColumn,
  gapNum,
  widthNum,
  jc,
}) => {
  const cardStyle = {
    background: bgColor,
    flexDirection: rowColumn,
    gap: gapNum,
    justifyContent: jc,
  };

  return (
    <div
      className={isAdCard ? style.cardContainer : style.countCardContainer}
      style={cardStyle}
    >
      {
        <>
          <div className={style.phoneInfo}>
            <h2 className={style.phoneName}>{text}</h2>
            {price ? (
              <h4 className={style.phonePrice}>{price}Azn</h4>
            ) : (
              <p className={style.countTxt}>{countTxt}</p>
            )}
            {price ? (
              <button className={style.btn}>{btntxt}</button>
            ) : (
              <div className={style.linkText}>
                <p>{linktxt}</p> <img src={arrowIcon} alt="" />
              </div>
            )}
          </div>
          {arrowIcon ? (
            <div className={style.imgDiv}>
              <img
                src={phonePic}
                alt=""
                className={style.cardImage}
                style={{ width: widthNum }}
              />
            </div>
          ) : (
            <>
              <img src={phonePic} alt="" className={style.cardImage} />
            </>
          )}
        </>
      }
    </div>
  );
};

export default CardForPhone;
