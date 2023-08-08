import React, { useEffect, useState } from "react";
import style from "./DropdownList.module.scss";
import { useNavigate } from "react-router-dom";

const DropdownList = ({ openDrop, setOpenDrop, category, hoverId }) => {
  const [childCategory, setChildCategory] = useState([]);

  const navigate = useNavigate();

  console.log(childCategory, "childish gambino");

  console.log(category, "dropppp");
  useEffect(() => {
    if (category.id === hoverId) {
      setChildCategory(category.children);
    }
  }, [category.id, hoverId, category.children]);

  return (
    <>
      {openDrop ? (
        <div className={style.dropCont}>
          <ul>
            {childCategory.map((child) => {
              return (
                <li
                  key={child.id}
                  onClick={() => navigate(`/products/${child.slug}`)}
                  className={style.childLi}
                >
                  {child.name}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default DropdownList;
