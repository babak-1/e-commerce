import React from "react";
import style from "./Card.module.scss"

const Card = ({sliderImage}) => {
  return (
    <div className={style.cardContainerLargest}>
         <div className={style.cardCont}>
      <div className={style.cardInfo}>
        <div className={style.cardHeaders}>
          <h1>Buy & Sell</h1>
          <h1>What's Now & Next</h1>
        </div>
        <p className={style.cardParag}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quod?</p>
      </div>

      <img src={sliderImage} alt="" className={style.cardImage} />
    </div>
    </div>
   
  );
};

export default Card;
