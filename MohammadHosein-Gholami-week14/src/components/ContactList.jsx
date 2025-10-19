import { useState } from "react";
import styles from "./ContactList.module.css";

function ContactList({ contacts, onEdit, onDelete }) {
  const [search, setSearch] = useState("");

  const changeHandler = (event) => {
    setSearch(event.target.value);
    setSearch("");
    event.preventDefault();
  };
  return (
    <div className={styles.listContainer}>
      <h2>لیست مخاطبین</h2>
      {contacts.length === 0 ? (
        <p className={styles.empty}>هیچ مخاطبی وجود ندارد!</p>
      ) : (
        contacts.map((contact) => (
          <div key={contact.id} className={styles.contactCard}>
            <p>
              <strong>
                {contact.name} {contact.lastName}
              </strong>
            </p>
            <p>📧 {contact.email}</p>
            <p>💼 {contact.job}</p>
            <p>📞 {contact.phone}</p>
            <div className={styles.buttons}>
              <button
                className={`${styles.button} ${styles.editBtn}`}
                onClick={() => onEdit(contact)}
              >
                ویرایش
              </button>
              <button
                className={`${styles.button} ${styles.deleteBtn}`}
                onClick={() => onDelete(contact)}
              >
                حذف
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ContactList;
