import React, { useEffect, useState } from "react";
import { customDetails } from "../../API/productAPI";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCustomerData,
  updateCustomer,
} from "../../Redux/actions/userProfile";
import style from "./UserProfil.module.scss";

const UserProfil = () => {
  // const navigate = useNavigate();
  const customerID = localStorage.getItem("customerID");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  console.log(user, "reduxUSer");

  useEffect(() => {
    if (customerID !== null) {
      dispatch(getCustomerData());
    }
  }, [customerID, dispatch]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm();

  const handleLogout = () => {
    localStorage.removeItem("customerID");
  };

  useEffect(() => {
    reset(user.user);
  }, [reset, user.user]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.detailsCont}>
        <div className={style.userProfile}>
          <h2>Profilim</h2>
          <ul>
            <li>
              <Link to="/userprofile">Şəxsi məlumatlar</Link>
            </li>
            <li>
              <Link to="/login" onClick={handleLogout}>
                Çıxış
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.userDetails}>
          <h3>Şəxsi məlumatlar</h3>
          {!user.loading ? (
            <form
              onSubmit={handleSubmit((data) => {
                isDirty && dispatch(updateCustomer(data));
                console.log(data, "useformdata");
              })}
            >
              <div className={style.inputBlock}>
                <label>Ad </label>
                <input
                  {...register("firstname", {
                    required: "Ad və soyadınızı qeyd edin",
                  })}
                  type="text"
                  placeholder="Adınızı və Soyadınızı daxil edin"
                  name="firstname"
                />
                {errors.firstname && (
                  <span className={style.alertMessage}>
                    {errors.firstname.message}
                  </span>
                )}
              </div>
              <div className={style.inputBlock}>
                <label>E-mail</label>
                <input
                  {...register("email", {
                    required: "Emailinizi qeyd edin",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Format düzgün deyil",
                    },
                  })}
                  type="email"
                  placeholder="nümunə@gmail.com"
                  name="email"
                  // value={user?.user?.email}
                />
                {errors.email && (
                  <span className={style.alertMessage}>
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className={style.inputBlock}>
                <label>Mobil nömrə</label>
                <InputMask
                  mask="999 999 99 99"
                  maskChar={null}
                  placeholder="077 000 00 00"
                  {...register("phone", { required: "Nömrənizi qeyd edin" })}
                ></InputMask>
                {errors.phone && (
                  <span className={style.alertMessage}>
                    {errors.phone.message}
                  </span>
                )}
              </div>
              <button
                className={`${style.updateBtn} ${!isDirty && style.disableBtn}`}
                disabled={!isDirty}
              >
                Məlumatları yenilə
              </button>
            </form>
          ) : (
            <div className={style.loading}>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfil;
