import React, { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import ContactItem from "./ContactItem";
import styles from "./ContactList.module.css"

function ContactList() {
  const { state } = useContext(ContactContext);
  const filtered = state.contacts.filter((contact) =>
    contact.name.toLowerCase().includes(state.search.toLowerCase())
  );
  return (
    <div className={styles.contactList}>
      <ul>
        {filtered.length === 0 ? (
          <p>هیچ مخاطبی یافت نشد.</p>
        ) : (
          filtered.map((filter) => (
            <ContactItem key={filter.id} contact={filter} />
          ))
        )}
      </ul>
    </div>
  );
}

export default ContactList;
