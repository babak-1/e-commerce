import React, { useState } from "react";
import style from "./Filter.module.scss";
import closeBtn from "../../assets/icon/filterCloseIcon.svg";
import minusBtn from "../../assets/icon/minusIcon.svg";
import plusBtn from "../../assets/icon/plusIcon.svg";
import FilterKind from "../filterKind/FilterKind";
const Filter = ({ isShowFilter, setIsshowFilter }) => {
  const handleShowContent = () => {
    setIsshowFilter(false);
  };

  return (
    <>
      <div
        className={`${isShowFilter ? style.openFilter : style.closeFilter} ${
          style.container
        }`}
      >
        <div className={style.mobileClosedBtn} onClick={handleShowContent}>
          <img src={closeBtn} alt="" />
          <h1 className={style.mobileHeader}>Filtirlemeler</h1>
        </div>
        <hr className={style.filterLineMobile} />

        <div className={style.filterCommonContainer}>
          <FilterKind kindName="Brend" />
          <button className={style.filterBtn} onClick={handleShowContent}>
            Filterlənmiş məhsulları göstər
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
