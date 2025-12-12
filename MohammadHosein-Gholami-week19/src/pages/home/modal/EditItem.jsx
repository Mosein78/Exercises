import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./EditItem.module.css";
import { useEditItem } from "../../../hooks/useEditItem";

function EditItem({ click, item }) {
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

  const { mutate, isLoading } = useEditItem();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    },
  });

  const onSubmit = (data) => {
    mutate(
      { id: item.id, ...data },
      {
        onSuccess: () => {
          reset(), click();
        },
        onError: (err) => {
          console.log(err.response?.data?.message || err.message);
        },
      }
    );
  };

  return (
    <div>
      <div className={styles.formbox}>
        <p className={styles.title}>ویرایش اطلاعات</p>

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
              {isLoading ? "درحال ثبت..." : "ثبت اطلاعات جدید"}
            </button>
            <button onClick={click}>انصراف</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditItem;
