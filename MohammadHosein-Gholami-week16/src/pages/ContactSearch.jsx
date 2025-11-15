import React, { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import styles from "./ContactSearch.module.css"


function ContactSearch() {
  const { state, dispatch } = useContext(ContactContext);

  const changeHandler=(e)=>{
    dispatch({type:"SET_FIELD" , field:"search" , value: e.target.value})
  }

  return (
    <div className={styles.contactSearch}>
      <input
        type="text"
        placeholder="Please search your Item"
        value={state.search}
        onChange={changeHandler}
      />
    </div>
  );
}

export default ContactSearch;
