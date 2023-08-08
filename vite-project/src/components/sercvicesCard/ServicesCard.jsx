import React from 'react'
import style from "./ServicesCard.module.scss"
const ServicesCard = ({cardIcon,text,parag}) => {
  return (
    <div className={style.cardsContainer}>
        <img src={cardIcon} alt="" className={style.cardImage} />
        <h4 className={style.headding}>{text}</h4>
        <p className={style.text}>{parag}</p>
    </div>
  )
}

export default ServicesCard