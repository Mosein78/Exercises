import React from "react";
import styles from "./ListProducts.module.css";
import { useTitle } from "../../../hooks/useTitle";
import { GoTrash } from "react-icons/go";
import { TbEdit } from "react-icons/tb";
import { useState } from "react";
import EditItem from "../modal/EditItem";
import DeleteItem from "../modal/DeleteItem";
import { useProducts } from "../../../hooks/useProducts";
import { InfinitySpin } from "react-loader-spinner";

function ListProducts() {
  const [edit, setEdit] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const { data, isLoading, error } = useProducts();
  useTitle("HomePage");

  if (isLoading)
    return (
      <div className={styles.noData}>
        <InfinitySpin width="200" color="#3333337d" />;
      </div>
    );
  if (!data)
    return (
      <div className={styles.noData}>
        <p>هیچ محصولی وجود ندارد</p>
      </div>
    );
  if (error)
    return (
      <div className={styles.noData}>
        <p>خطا در دریافت محصولات</p>;
      </div>
    );

  return (
    <div>
      <div className={styles.container}>
        <table>
          <thead>
            <tr>
              <th>نام کالا</th>
              <th>موجودی</th>
              <th>قیمت</th>
              <th>شناسه کالا</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity} عدد</td>
                <td>{item.price} تومان</td>
                <td>{item.id}</td>
                <td>
                  <div className={styles.icons}>
                    <button onClick={() => setEdit(item.id)}>
                      <TbEdit className={styles.edit} />
                    </button>
                    {edit === item.id && (
                      <div
                        className={styles.backdrop}
                        onClick={() => setEdit(null)}
                      >
                        <div
                          className={styles.editModal}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <EditItem click={() => setEdit(null)} item={item} />
                        </div>
                      </div>
                    )}

                    <button
                      className={styles.delete}
                      onClick={() => setDeleteItem(item.id)}
                    >
                      <GoTrash className={styles.delete} />
                    </button>
                    {deleteItem === item.id && (
                      <div
                        onClick={() => setDeleteItem(null)}
                        className={styles.backdrop}
                      >
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className={styles.deleteModal}
                        >
                          <DeleteItem
                            click={() => setDeleteItem(null)}
                            item={item}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListProducts;
