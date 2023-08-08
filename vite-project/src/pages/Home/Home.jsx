import React, { useEffect } from "react";
import style from "./home.module.scss";

import CardForPhone from "../../components/cardForPhone/CardForPhone";
import PhoneSlider from "../../components/phoneSlider/PhoneSlider";
import Slider from "../../components/slider/Slider";
import ServicesCard from "../../components/sercvicesCard/ServicesCard";
import iphone8 from "../../assets/image/iphone-8-plus.svg";
import phonePic1 from "../../assets/image/cardPhone1Orig.png";
import phonePic2 from "../../assets/image/cardPhone2.svg";
import watchPic from "../../assets/image/cardWatch.svg";
import blueArrow from "../../assets/icon/blueArrowIcon.svg";
import brokenBox from "../../assets/icon/brokenBox.svg";
import brookenCard from "../../assets/icon/brokenCard.svg";
import brokenMedal from "../../assets/icon/brokenMedal.svg";
import Partner from "../../components/partnersSlider/Partner";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Slider />
      <PhoneSlider headertxt="Laptoplar" category="laptop" />
      <PhoneSlider headertxt="Bütün məhsullar" />
      <div className={style.cardCont}>
        <CardForPhone
          text="IPhone 11.Rengli.Guclu.Esl size lazim olan."
          price="1519"
          btntxt="indi alin"
          phonePic={iphone8}
          bgColor="white"
          isAdCard
        />
        <CardForPhone
          text="IPhone 11.Rengli.Guclu.Esl size lazim olan."
          price="1519"
          btntxt="indi alin"
          phonePic={iphone8}
          bgColor="#F6F5F8"
          isAdCard
        />
      </div>
      <PhoneSlider headertxt="Aksesuarlar" category="accessories" />

      <div className={style.cardForPhoneCont}>
        <div className={style.cardForDesktopCont}>
          <CardForPhone
            text="Telefon"
            phonePic={phonePic1}
            bgColor="linear-gradient(600deg,#ffffff , #f2e4dd)"
            countTxt="Mehsul sayi : 322"
            linktxt="Mehsullara kecid"
            arrowIcon={blueArrow}
          />
        </div>
        <div className={style.cardForDesktopCont2}>
          <CardForPhone
            text="Telefon"
            phonePic={watchPic}
            bgColor="linear-gradient(200deg, #f2e4dd, #ffffff)"
            countTxt="Mehsul sayi : 322"
            linktxt="Mehsullara kecid"
            arrowIcon={blueArrow}
            rowColumn="row"
            gapNum="0px"
          />
          <CardForPhone
            text="Telefon"
            phonePic={phonePic2}
            bgColor="linear-gradient(350deg, #f2e4dd, #ffffff)"
            countTxt="Mehsul sayi : 322"
            linktxt="Mehsullara kecid"
            arrowIcon={blueArrow}
            rowColumn="row"
            gapNum="0px"
          />
        </div>
      </div>

      <div className={style.servicesCardsCont}>
        <ServicesCard
          cardIcon={brokenBox}
          text="Catdirilma"
          parag="Lorem ipsum dolor sit amet, consectetur adipiscing elit "
        />
        <ServicesCard
          cardIcon={brookenCard}
          text="Kredit"
          parag="Lorem ipsum dolor sit amet, consectetur adipiscing elit "
        />
        <ServicesCard
          cardIcon={brokenMedal}
          text="Zemanet"
          parag="Lorem ipsum dolor sit amet, consectetur adipiscing elit "
        />
      </div>

      <Partner />
    </>
  );
};

export default Home;
