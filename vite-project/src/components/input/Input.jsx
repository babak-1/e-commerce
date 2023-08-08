import style from "./input.module.scss";
import searchIcon from "../../assets/icon/searchIcon.svg";
import closeX from "../../assets/icon/closeXicon.svg";
import { useState } from "react";
import SearchHistory from "../SeachHistory/SearchHistory";
import { useEffect } from "react";
import { getSearch } from "../../API/productAPI";
import SearchBar from "../SearchBar/SearchBar";

export const Input = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [historySearch, setHistorySearch] = useState(() => {
    return JSON.parse(localStorage.getItem("history")) || [];
  });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(historySearch, "usestateHistory");

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(historySearch));
  }, [historySearch]);

  // useEffect(() => {
  //   const storedHistory = localStorage.getItem("history");
  //   if (storedHistory) {
  //     setHistorySearch(JSON.parse(storedHistory));
  //   }
  // }, []);

  useEffect(() => {
    const getSearchProduct = async () => {
      setLoading(true);
      setProducts([]);
      try {
        if (inputValue.trim().length > 0) {
          const res = await getSearch(inputValue);
          return setProducts(res);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    const delayedSearch = setTimeout(() => {
      getSearchProduct();
    }, 1000);

    return () => clearTimeout(delayedSearch);
  }, [inputValue]);

  const result = historySearch.reduce((acc, val) => {
    if (!acc[val]) {
      acc[val] = 1;
    } else {
      acc[val] += 1;
    }
    return acc;
  }, {});

  console.log(result, "historySearchg");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleClose = () => {
    setIsFocused(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHistorySearch([...historySearch, inputValue]);
    setInputValue("");
  };

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 300);
  };

  const inputClassName = isFocused
    ? style.activeSearchInput
    : style.searchInput;

  return (
    <>
      <form action="" className={style.headerInput} onSubmit={handleSubmit}>
        <img src={searchIcon} alt="search icon" className={style.searchIcon} />
        <input
          className={`${inputClassName} ${style.cmnSearchInput}`}
          type="text"
          placeholder="Axtarış...."
          onFocus={handleFocus}
          onChange={handleChangeInput}
          value={inputValue}
          onBlur={handleBlur}
        />
        {isFocused && (
          <img
            src={closeX}
            alt="close btn"
            onClick={handleClose}
            className={style.closeBtn}
          />
        )}
      </form>

      {isFocused && inputValue.trim().length === 0 && (
        <SearchHistory
          historySearch={historySearch}
          setHistorySearch={setHistorySearch}
          result={result}
          products={products}
        />
      )}
      {inputValue.trim().length > 0 && isFocused && (
        <SearchBar
          products={products}
          setIsFocused={setIsFocused}
          setHistorySearch={setHistorySearch}
          historySearch={historySearch}
        />
      )}
    </>
  );
};
