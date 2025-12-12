import React from "react";
import styles from "./NewItem.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateItem } from "../../../hooks/useCreatItem";
import { useNavigate } from "react-router-dom";

function NewItem({ click }) {
  const schema = yup.object().shape({
    name: yup
      .string()
      .trim("نام کالا نباید فقط شامل فضای خالی باشد")
      .required("لطفا نام کاربری را وارد نمایید"),
    quantity: yup
      .number()
      .positive("عدد نمی‌تواند منفی باشد")
      .typeError("فقط عدد وارد کنید")
      .min(1, "حداقل ۱ عدد باشد")
      .max(100, "حداکثر ۱۰۰ عدد باشد")
      .required("لطفا تعداد را وارد نمایید"),
    price: yup
      .number()
      .positive("قیمت باید بزرگ‌تر از صفر باشد")
      .typeError("فقط عدد وارد کنید")
      .min(1, "حداقل ۱ ریال باشد")
      .required("لطفا مبلغ را وارد نمایید"),
  });

  const navigate = useNavigate();

  const { mutate, isPending, error } = useCreateItem();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = ({ name, price, quantity }) => {
    mutate(
      { name, price, quantity },
      {
        onSuccess: () => {
          reset(), click();
        },
        onError: (err) => {
          if (err.response?.data?.message === "Invalid or expired token") {
            localStorage.removeItem("token");
            navigate("/login");
          }
        },
      }
    );
    console.log("the form submit");
    console.log({ name, price, quantity });
  };

  return (
    <div>
      <div className={styles.formbox}>
        <p className={styles.title}>ایجاد محصول جدید</p>

        {error && (
          <p className={styles.error}>
            {error.response?.data?.message === "Invalid or expired token"
              ? "اطلاعات را درست وارد نمایید"
              : error.response?.data?.message || "خطایی رخ داده است"}
          </p>
        )}

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label>نام کالا</label>
          <input type="text" placeholder="نام کالا" {...register("name")} />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}

          <label>تعداد موجودی</label>
          <input type="number" placeholder="تعداد" {...register("quantity")} />
          {errors.quantity && (
            <p className={styles.error}>{errors.quantity.message}</p>
          )}

          <label>قیمت</label>
          <input type="number" placeholder="قیمت" {...register("price")} />
          {errors.price && (
            <p className={styles.error}>{errors.price.message}</p>
          )}

          <div className={styles.button}>
            <button type="submit">
              {isPending ? "درحال ساخت ..." : "ایجاد"}
            </button>
            <button onClick={click}>انصراف</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewItem;
