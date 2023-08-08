import { Link, useNavigate } from "react-router-dom";
import style from "./SliderCard.module.scss";

const SliderCard = ({ price, phonePic, aznIconBlack, text, product }) => {
  const navigate = useNavigate();
  // console.log(product, "cardseyfe");
  return (
    <div
      className={style.cardCont}
      onClick={() => {
        navigate(`/product-details/${product?.id}`);
      }}
    >
      {" "}
      <img src={phonePic} alt="" className={style.cardImage} /> <p>{text}</p>
      <div className={style.prices}>
        <span>
          {price} <img src={aznIconBlack} alt="" />
        </span>
      </div>
    </div>
  );
};

export default SliderCard;
