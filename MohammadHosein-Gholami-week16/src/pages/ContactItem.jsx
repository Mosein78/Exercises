import React, { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import styles from "./ContactItem.module.css";
import { Link } from "react-router";

function ContactItem({ contact }) {
  const { dispatch } = useContext(ContactContext);
  return (
    <div>
      <li className={styles.contactItem}>
        <span>
          {contact.name} 
        </span>
        <span>
        {contact.email}
        </span>
        <div>
          <button
            onClick={() => dispatch({ type: "SET_EDITING", id: contact.id })}
          >
            <Link to="/form">Edit</Link>
          </button>
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
