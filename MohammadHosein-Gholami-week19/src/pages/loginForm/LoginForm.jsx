import React from "react";
import styles from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginForm } from "../../hooks/useLoginForm";
import { InfinitySpin } from "react-loader-spinner";

function LoginForm() {
  const schema = yup.object().shape({
    username: yup
      .string()
      .min(4, "حداقل 4 کارکتر باشد")
      .required("لطفا نام کاربری را وارد نمایید"),
    password: yup
      .string()
      .min(9, "حداقل 9 کارکتر باشد")
      .matches(/[a-z]+/, "حداقل یک حرف کوچک وارد نمایید")
      .matches(/[A-Z]+/, "حداقل یک حرف بزرگ وارد نمایید")
      .matches(/\d+/, "حداقل یک عدد وارد نمایید")
      .required("لطفا رمز عبور را وارد نمایید"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { mutate, isPending, error } = useLoginForm();

  const onSubmit = ({ username, password }) => {
    mutate(
      { username, password },
      {
        onSuccess: (res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));

          navigate("/homepage");
        },
        onError: (err) => console.log(err.response?.data),
      }
    );
  };

  const navigate = useNavigate();
  useTitle("Login");
  if (isPending)
    return (
      <div className={styles.noData}>
        <InfinitySpin width="200" color="#3333337d" />
      </div>
    );
  return (
    <div className={styles.real}>
      <div className={styles.container}>
        <img src="http://localhost:5173/logo/Union.svg" alt="logo" />
        <p className={styles.title}>فرم ورود</p>

        {error && (
          <p className={styles.error}>
            {error.response?.data?.message === "Invalid credentials"
              ? "نام کاربری یا رمز عبور اشتباه است"
              : error.response?.data?.message || "خطایی رخ داده است"}
          </p>
        )}

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputs}>
            <input
              type="text"
              placeholder="نام کاربری"
              {...register("username")}
            />
            {errors.username && (
              <p className={styles.error}>{errors.username.message}</p>
            )}
          </div>
          <div className={styles.inputs}>
            <input
              type="password"
              placeholder="رمز عبور"
              {...register("password")}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password.message}</p>
            )}
          </div>

          <button type="submit" disabled={isPending}>
            {isPending ? "در حال ارسال..." : "ورود"}
          </button>
        </form>

        <span onClick={() => navigate("/register")}>ایجاد حساب کاربری!</span>
      </div>
    </div>
  );
}

export default LoginForm;
