import React, { useEffect } from "react";
import style from "./Register.module.scss";
import facebook from "./../../assets/image/facebookLogin.svg";
import google from "../../assets/image/googleLogin.svg";
import backImage from "../../assets/image/staticLogin.svg";
import InputMask from "react-input-mask";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const navigate = useNavigate();

  const createCustomer = async (formData) => {
    const body = {
      email: formData?.email,
      firstname: formData?.fullName,
      phone: formData?.phone,
    };

    try {
      const result = await fetch("https://api.chec.io/v1/customers", {
        method: "POST",
        headers: {
          "X-Authorization": "sk_52354405e6bcb8e5890af632ffc807d60524db28ebe05",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const res = await result.json();
      console.log(res, "oldumu reizz");
      navigate("/login");
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // scroll

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.pageContainer}>
      <div className={style.loginContainer}>
        <h2 className={style.header}>Qeydiyyat</h2>

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
            createCustomer(data);
          })}
        >
          <div className={style.inputBlock}>
            <label>Ad,Soyad</label>
            <input
              type="text"
              {...register("fullName", { required: "Adınız qeyd edin" })}
              placeholder="Adınızı və soyadınızı daxil edin"
            />
            {errors.fullName && (
              <span className={style.alertMessage}>
                {errors.fullName.message}
              </span>
            )}
          </div>

          <div className={style.inputBlock}>
            <label>Email</label>
            <input
              type="email"
              placeholder="nümunə@gmail.com"
              {...register("email", {
                required: "Email yazılmalıdır",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Format düzgün deyil",
                },
              })}
            />
            {errors.email && (
              <span className={style.alertMessage}>{errors.email.message}</span>
            )}
          </div>

          <div className={style.inputBlock}>
            {" "}
            <label>Mobil nömrə</label>
            <InputMask
              mask="999 999 99 99"
              maskChar={null}
              placeholder="077 000 00 00"
              {...register("phone", {
                required: "Nömrənizi qeyd edin",
                minLength: {
                  value: 13,
                  message: "Nömrə səhvdir",
                },
              })}
            ></InputMask>
            {errors.phone && (
              <span className={style.alertMessage}>{errors.phone.message}</span>
            )}
          </div>

          <div className={`${style.inputBlock} ${style.checkboxBlock}`}>
            <input
              {...register("terms", {
                required: "Əgər istifadəçi şərtləri ilə razısınızsa doldurun",
              })}
              type="checkbox"
            />
            <div className={style.spanDiv}>
              <span> İstifadəçi şərtləri ilə razıyam</span>
              {errors.terms && (
                <span className={style.alertMessage}>
                  {errors.terms.message}
                </span>
              )}
            </div>
          </div>

          <button type="submit">Qeydiyyat</button>
        </form>
      </div>

      <div className={style.staticLogin}>
        <img src={backImage} alt="photo" className={style.backImage} />
        <p>
          Artıq hesabınız var?{" "}
          <Link to={"/login"} className={style.link}>
            Daxil olun
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
