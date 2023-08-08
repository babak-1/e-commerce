import React from "react";
import style from "./searchHistory.module.scss";

const SearchHistory = ({
  setHistorySearch,
  historySearch,
  result,
  products,
}) => {
  const handleClear = (e) => {
    e.preventDefault();
    setHistorySearch([]);
  };

  return (
    <div className={style.searchDataCont}>
      <div className={style.searchDataItemCont}>
        <div className={style.searchHeaderCont}>
          <h3>Son axtarislar</h3>
          <h5 onClick={handleClear}>Temizle</h5>
        </div>

        <ul>
          {historySearch.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={style.searchDataItemCont}>
        <div className={style.searchHeaderCont}>
          <h3>Çox axtarılanlar</h3>
        </div>

        <ul>
          {Object.entries(result)
            .sort((a, b) => b[1] - a[1])
            .map(([key]) => (
              <li key={key}>{key}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchHistory;
