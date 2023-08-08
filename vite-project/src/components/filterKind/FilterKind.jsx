import React, { useEffect } from "react";
import style from "./filterKind.module.scss";
import { useState } from "react";
import minusBtn from "../../assets/icon/minusIcon.svg";
import plusBtn from "../../assets/icon/plusIcon.svg";
import azn from "../../assets/icon/aznIcon.svg";
import { useSearchParams } from "react-router-dom";
import useWindowSize from "../../CustomHooks/UseWindowSize.Jsx";

const filters = [
  {
    name: "Apple",
    slug: "iphone",
  },
  {
    name: "Samsung",
    slug: "samsung",
  },
  {
    name: "Xioami",
    slug: "redmi",
  },
  {
    name: "Sony",
    slug: "Ps5",
  },
];

const FilterKind = ({ price, kindName, fD, pB }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showContent, setShowContent] = useState(false);
  const [filtered, setFiltered] = useState([]);

  console.log(searchParams, "searchparamdayam");

  // custom hook
  const size = useWindowSize();
  console.log(size.width);

  const handleShowContent = () => {
    setShowContent(!showContent);
  };

  const handleCheckBox = (e) => {
    const { value, checked } = e.target;

    console.log(value, "budu");
    if (checked) {
      setFiltered([...filtered, value]);
    } else {
      setFiltered(filtered.filter((item) => item !== value));
    }
  };

  useEffect(() => {
    if (filtered.length > 0) {
      searchParams.set("query", filtered);
      setSearchParams(searchParams);
    }
  }, [filtered, searchParams, setSearchParams]);

  useEffect(() => {
    const params = searchParams.get("query");

    if (params) {
      setFiltered(params.split(","));
    }
  }, [searchParams]);

  console.log(searchParams, "searchparamdayam2");

  const formStyle = {
    flexDirection: fD,
    paddingBottom: pB,
  };

  console.log(filtered);

  return (
    <>
      <div className={style.filterKindCont} onClick={handleShowContent}>
        <div className={style.filterNameCont}>
          <h3>{kindName}</h3>{" "}
          <h5 className={style.filterOptionCount}>{"(4)"}</h5>
        </div>
        <img src={showContent ? minusBtn : plusBtn} alt="" />
      </div>

      <hr className={style.filterLineCommon} />

      <form
        action=""
        className={showContent ? style.filterForm : style.closeFilterForm}
        style={formStyle}
      >
        {price ? (
          <div className={style.priceContainer}>
            {" "}
            <div className={style.inputContPrice}>
              <input
                type="number"
                className={style.priceInput}
                placeholder="En az"
              />{" "}
              <img src={azn} alt="" className={style.iconInput} />
            </div>{" "}
            <div className={style.line}></div>{" "}
            <div className={style.inputContPrice}>
              <input
                type="number"
                className={style.priceInput}
                placeholder="En az"
              />{" "}
              <img src={azn} alt="" className={style.iconInput} />
            </div>{" "}
          </div>
        ) : (
          <>
            {" "}
            {filters.map((item, i) => {
              return (
                <div key={i} className={style.inputCont}>
                  <input
                    type="checkbox"
                    id={item.slug}
                    value={item.slug}
                    onChange={(e) => {
                      handleCheckBox(e);
                    }}
                    checked={filtered.includes(item.slug) ? true : false}
                  />
                  <label htmlFor={item.slug}>{item.name}</label>
                </div>
              );
            })}
          </>
        )}
      </form>
    </>
  );
};

export default FilterKind;
