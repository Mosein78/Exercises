import React from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import styles from "./CreateNewItems.module.css";
import { useState } from "react";
import NewItem from "../modal/NewItem";


function CreateNewItem() {
  const [click, setClick] = useState(false);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.manger}>
          <span>
            <GiSettingsKnobs />
          </span>
          <p>مدیریت کالا</p>
        </div>
        <button className={styles.button} onClick={() => setClick(true)}>
          افزودن محصول
        </button>
        {click && (
          <div className={styles.backdrop} onClick={() => setClick(false)}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <NewItem click={()=> setClick(false)}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateNewItem;
