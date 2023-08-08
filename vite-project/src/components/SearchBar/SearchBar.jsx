import React from "react";
import style from "./SearchBar.module.scss";
import { useNavigate } from "react-router-dom";
const SearchBar = ({
  products,
  setIsFocused,
  setHistorySearch,
  historySearch,
  inputValue,
}) => {
  const navigate = useNavigate();
  // console.log(products, "searchbardayam");
  return (
    <div className={style.searchDataCont}>
      <div className={style.searchDataItemCont}>
        <div className={style.searchHeaderCont}>
          <h3>Nəticələr</h3>
        </div>

        <ul>
          {products?.data?.data?.map((product) => (
            <li
              key={product?.id}
              onClick={() => {
                setIsFocused(false);
                navigate(`/product-details/${product?.id}`);
                setHistorySearch([...historySearch, product?.name]);
              }}
            >
              <img src={product.image.url} alt="" className={style.image} />
              <div>
                <h4>{product.name}</h4>
                <h4>{product.price.formatted_with_code}</h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
