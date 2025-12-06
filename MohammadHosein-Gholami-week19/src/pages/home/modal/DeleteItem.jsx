import React from "react";
import styles from "./DeleteItem.module.css";
import { useDeleteItem } from "../../../hooks/useDeleteItem";

function DeleteItem({ click, item }) {
  const { mutate, isLoading} = useDeleteItem();

  const deleteHandler = () => {
    mutate(item.id, {
      onSuccess: () => {
        click();
      },
      onError: (err) => {
        console.log(err.response?.data?.message || err.message);
      },
    });
  };
  
  return (
    <div>
      <div className={styles.container}>
        <img src="http://localhost:5173/picture/Close.svg" alt="delete" />
        <p>آیا از حذف این محصول مطمئنید؟</p>
        <div className={styles.button}>
          <button onClick={deleteHandler}>
            {isLoading ? "در حال حذف..." : "حذف"}
          </button>
          <button onClick={click}>لغو</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteItem;
