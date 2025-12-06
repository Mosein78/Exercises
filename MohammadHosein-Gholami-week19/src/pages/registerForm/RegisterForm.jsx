import React from "react";
import styles from "./RegisterForm.module.css";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegisterForm } from "../../hooks/useRegister";
import { InfinitySpin } from "react-loader-spinner";

function RegisterForm() {
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
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "لطفا تکرار رمز عبور را درست وارد نمایید")
      .required("لطفا تکرار رمز عبور را وارد نمایید"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { mutate, isPending, error  } = useRegisterForm();

  const navigate = useNavigate();
  useTitle("Register");

  const onSubmit = ({ username, password }) => {
    mutate(
      { username, password },
      {
        onSuccess: () => {
          navigate("/Login");
        },
        onError: (err) => console.log(err.response.data),
      }
    );
  };
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
        <p className={styles.title}>فرم ثبت نام</p>

        {error && (
          <p className={styles.error}>
            {error.response?.data?.message === "User already exists"
              ? "این کاربر قبلاً ثبت نام شده است"
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
          <div className={styles.inputs}>
            <input
              type="password"
              placeholder="تکرار رمز عبور "
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className={styles.error}>{errors.confirmPassword.message}</p>
            )}
          </div>
          <button type="submit" disabled={isPending}>
            {isPending ? "در حال ارسال..." : "ثبت نام"}
          </button>
        </form>

        <span onClick={() => navigate("/login")}>حساب کاربری دارید؟</span>
      </div>
    </div>
  );
}

export default RegisterForm;
