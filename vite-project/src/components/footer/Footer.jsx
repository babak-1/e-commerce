import React from "react";
import style from "./Footer.module.scss";

import location from "../../assets/icon/locationIcon.svg";
import email from "../../assets/icon/emailIcon.svg";
import phone from "../../assets/icon/phoneIcon.svg";
import instagram from "../../assets/icon/instagram.svg";
import facebook from "../../assets/icon/facebook.svg";
import youtube from "../../assets/icon/youtube.svg";
import twitter from "../../assets/icon/twitter.svg";
import copyright from "../../assets/icon/copyright.svg";

import logo from "../../assets/icon/telloIconWord.svg";

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.infoCont}>
          <div className={style.logo}>
            <img src={logo} alt="logo" />
            <ul className={style.socialPages}>
            <li>
              <a href="">
                <img src={instagram} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={facebook} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={youtube} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={twitter} alt="" />
              </a>
            </li>
          </ul>
          </div>

          

          <ul className={style.menuPart}>
            <h3>Menu</h3>
            <li>
              <a href="/">Yeni</a>
            </li>
            <li>
              <a href="/">Endirimlər</a>
            </li>
            <li>
              <a href="/">Aksessuarlar</a>
            </li>
            <li>
              <a href="/">Bütün brendlər</a>
            </li>
          </ul>
          <ul className={style.partHelp}>
            <h3>Kömək</h3>
            <li>
              <a href="/">Tez-tez soruşulan suallar</a>
            </li>
            <li>
              <a href="/">Çatdırılma xidməti</a>
            </li>
            <li>
              <a href="/">Geri qaytarılma şərtləri</a>
            </li>
          </ul>
          <ul className={style.contactPart}>
            <h3>Əlaqə</h3>
            <li>
              <img src={location} alt="" />
              <a href="/">M. K. Ataturk avenue 89, Baku, Azerbaijan</a>
            </li>
            <li>
              <img src={email} alt="" />
              <a href="/">example@gmail.com</a>
            </li>
            <li>
              <img src={phone} alt="" />
              <a href="/">*2108</a>
            </li>
          </ul>

          <ul className={style.rulesAndSecretPart}>
            <li>
              <a href="/">Qaydalar və şərtlər</a>
            </li>
            <li>
              <a href="/">Məxfilik siyasəti</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className={style.hr} />
    <div className={style.copyrightPart}>
        <div className={style.copyrightlogoAndparag}>
        <img src={copyright} alt="" />
        <p>Tello 2021. Bütün hüquqlar qorunur.</p>
        </div>
      

        <ul className={style.rulesAndSecretPart}>
            <li>
              <a href="/">Qaydalar və şərtlər</a>
            </li>
            <li>
              <a href="/">Məxfilik siyasəti</a>
            </li>
          </ul>
      </div>

     

    
    </div>
  );
};

export default Footer;
