import React, { useEffect, useState } from "react";
import style from "./Navmenu.module.scss";
import navCloseX from "../../assets/icon/closeNav.svg";
import searchIcon from "../../assets/icon/searchIcon.svg";
import telloIcon from "../../assets/icon/telloIconWord.svg";
import arrowIcon from "../../assets/icon/arrowIcon.svg";
import { NavLink } from "react-router-dom";
import { getCategoryMenu } from "../../API/productAPI";
import DropdownList from "../DropdownList/DropdownList";
import UseWindowSize from "../../CustomHooks/UseWindowSize.Jsx";

const NavMenu = ({ isNavOpen, setNavOpen }) => {
  const [category, setCategory] = useState([]);
  const [openDrop, setOpenDrop] = useState(false);
  const [hoverId, setHoverId] = useState(null);
  // const [openId, setOpenID] = useState();
  const windowSize = UseWindowSize();

  useEffect(() => {
    const getData = async () => {
      const response = await getCategoryMenu();
      const products = response?.data?.data;

      setCategory(products);
    };

    getData();
  }, []);

  // drop
  const getHoverId = (res) => {
    if (res.children.length > 0 && windowSize.width >= 600) {
      setHoverId(res.id);
    }
    console.log(res, "hover");
  };

  console.log(hoverId, "hover id");
  console.log(category, "kateqoryam");

  const handleNav = () => {
    setNavOpen(false);
  };

  return (
    <div
      className={`${isNavOpen ? style.openNav : style.closeNav} ${
        style.navMenu
      }`}
    >
      <div className={style.navMenuWidthCont}>
        <div className={style.navMenuHeader}>
          <div className={style.navHeaderLogo}>
            <img src={navCloseX} alt="" onClick={handleNav} />
            <img src={telloIcon} alt="" />
          </div>
          <div className={style.navHeaderSearch}>
            <img src={searchIcon} alt="" />
          </div>
        </div>
      </div>
      <hr className={style.navHr} />

      <ul className={style.navBarList}>
        {category.map((menuLink) => (
          <li
            key={menuLink.id}
            className={style.contLi}
            onMouseOver={() => {
              getHoverId(menuLink);
              setOpenDrop(true);
            }}
          >
            <NavLink
              to={`/products${"/" + menuLink.slug}`}
              className={(navClass) =>
                `${style.navLink} ${navClass.isActive ? style.activeMenu : ""}`
              }
              onClick={handleNav}
              // onMouseOver={() => setOpenDrop(true)}
            >
              <span>{menuLink.name}</span>
            </NavLink>
            {menuLink.children.length > 0 && (
              <>
                <span
                  className={style.arrowIconSpan}
                  // onClick={() => childCategory(menuLink)}
                >
                  <img src={arrowIcon} alt="" />
                </span>

                {/* <DropdownList
                  setOpenDrop={setOpenDrop}
                  category={menuLink}
                  hoverId={hoverId}
                  openDrop={openDrop}
                /> */}
              </>
            )}
          </li>
        ))}
      </ul>

      <div className={style.navBtns}>
        <button className={style.loginBtn}>Daxil ol</button>
        <button className={style.registBtn}>Qeydiyyat</button>
      </div>
    </div>
  );
};

export default NavMenu;
