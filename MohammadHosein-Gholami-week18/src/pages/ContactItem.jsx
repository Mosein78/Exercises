import React, { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import styles from "./ContactItem.module.css";
import { useNavigate } from "react-router";

function ContactItem({ contact }) {
  const { dispatch } = useContext(ContactContext);
  const navigate = useNavigate();
  return (
    <div>
      <li className={styles.contactItem}>
        <span>{contact.name}</span>
        <span>{contact.email}</span>
        <div>
          <button
            onClick={() => {
              dispatch({ type: "SET_EDITING", id: contact.id });
              navigate("/form");
            }}
          >Edit</button>
          <button
            onClick={() => dispatch({ type: "DELETE_CONTACT", id: contact.id })}
          >
            Delete
          </button>
        </div>
      </li>
    </div>
  );
}

export default ContactItem;
