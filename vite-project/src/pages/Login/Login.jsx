import React, { useEffect } from "react";
import style from "./Login.module.scss";

import facebook from "./../../assets/image/facebookLogin.svg";
import google from "../../assets/image/googleLogin.svg";
import backImage from "../../assets/image/staticLogin.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const getCustomer = async (formData) => {
    const body = {
      email: formData.email,
      base_url: "http://127.0.0.1:5173/user-profile",
    };

    try {
      const result = await fetch(
        "https://api.chec.io/v1/customers/email-token",
        {
          method: "POST",
          headers: {
            "X-Authorization":
              "sk_52354405e6bcb8e5890af632ffc807d60524db28ebe05",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const res = await result.json();
      console.log(res, "oldumu reizz");
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  // scroll

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.pageContainer}>
      <div className={style.loginContainer}>
        <h2 className={style.header}>Daxil ol</h2>

        <div className={style.socialMediaIcons}>
          <div className={style.socialCont}>
            <img src={facebook} alt="facebook" className={style.facebook} />
            <h5>Facebook ilə</h5>
          </div>
          <div className={style.socialCont}>
            <img src={google} alt="google" className={style.google} />
            <h5>Google ilə</h5>
          </div>
        </div>

        <h5 className={style.optionalText}>və ya</h5>

        <form
          onSubmit={handleSubmit((data) => {
            getCustomer(data);
          })}
        >
          <label>Email</label>
          <input
            type="text"
            placeholder="nümunə@gmail.com"
            {...register("email", {
              required: "Email hissesi boşdur",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Format düzgün deyil",
              },
            })}
          />
          {errors.email && (
            <span className={style.alertMessage}>{errors.email.message}</span>
          )}

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className={style.staticLogin}>
        <img src={backImage} alt="photo" className={style.backImage} />
        <p>
          Hesabınız yoxdur?{" "}
          <Link to={"/register"} className={style.link}>
            Qeydiyyatdan keçin
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
