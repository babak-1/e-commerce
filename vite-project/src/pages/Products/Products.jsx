import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import style from "./Products.module.scss";
import Filter from "../../components/Filter/Filter";
import sortIcon from "../../assets/icon/sortIcon.svg";
import aznIconBlack from "../../assets/icon/aznIconBlack.svg";
import filterIcon from "../../assets/icon/filterIcon.svg";
import { useParams, useSearchParams } from "react-router-dom";
import { getProducts } from "../../API/productAPI";
import SliderCard from "../../components/SpecialCard/SliderCard";

import ThreeCircles from "react-spinners/ClipLoader";
import PageTurner from "../../components/Pagination/PageTurner";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isShowFilter, setIsshowFilter] = useState(false);
  const category = useParams().id;
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState(searchParams.get("sortBy") || "name");
  const [limit, setLimit] = useState(4);
  const [page, setPage] = React.useState(
    parseInt(searchParams.get("page")) || 1
  );
  const [query, setQuery] = useState(searchParams.get("query"));

  useEffect(() => {
    const param = searchParams.get("query");

    setQuery(param);
  }, [searchParams]);

  const handleSort = (value) => {
    setSort(value);
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  };

  console.log(query, "query product");

  useEffect(() => {
    const getAllProducts = async () => {
      setLoading(true);
      try {
        const response = await getProducts(limit, category, sort, page, query);
        const result = await response.data;
        setProducts(result);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };

    getAllProducts();
  }, [category, sort, page, limit, query]);

  const handleFilter = () => {
    setIsshowFilter(!isShowFilter);
  };
  console.log(products, "prodaktlarim");
  console.log(useParams(), "katanaa");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.productsContainer}>
      <Breadcrumb />

      <div className={style.productsCont}>
        <Filter isShowFilter={isShowFilter} setIsshowFilter={setIsshowFilter} />
        <div className={style.cardsAndOthers}>
          <div className={style.mobileSortingAndFilter}>
            <div className={style.iconAndSort}>
              <img src={sortIcon} alt="" />
              <h4 className={style.hiddenH4}>Sıralama</h4>
            </div>

            <div className={style.line}></div>

            <div className={style.iconAndSort} onClick={handleFilter}>
              <img src={filterIcon} alt="" />
              <h4>Filterləmələr</h4>
            </div>
          </div>

          <hr className={style.xLine} />

          <div className={style.countFound}>
            <h4>
              <span>{products?.data?.length}</span> Mehsul tapildi
            </h4>

            <select
              name=""
              id=""
              className={style.selectror}
              onChange={(e) => {
                handleSort(e.target.value);
              }}
              value={sort || "sort_order"}
            >
              <option value="sort_order">Ən yeni</option>
              <option value="price">Qiymətə görə</option>
              <option value="name">Ada görə</option>
            </select>
          </div>

          <div className={style.cardsList}>
            {loading ? (
              <div className={style.loadingCont}>
                <ThreeCircles
                  height="100"
                  width="100"
                  color="#4fa94d"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="three-circles-rotating"
                  outerCircleColor=""
                  innerCircleColor=""
                  middleCircleColor=""
                />
              </div>
            ) : (
              products?.data?.map((product) => (
                <SliderCard
                  key={product?.id}
                  phonePic={product?.image.url}
                  isPrice
                  price={product?.price.raw}
                  text={product?.name}
                  aznIconBlack={aznIconBlack}
                  product={product}
                />
              ))
            )}
          </div>

          <PageTurner
            pagination={products?.meta?.pagination}
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
