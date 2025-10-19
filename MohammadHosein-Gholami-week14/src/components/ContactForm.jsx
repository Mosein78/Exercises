import styles from "./ContactForm.module.css";
import { useEffect, useState } from "react";

function ContactForm({
  addContact,
  editingContact,
  setEditingContact,
  setContacts,
  contacts,
}) {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    job: "",
  });

  useEffect(() => {
    if (editingContact) {
      setForm(editingContact);
    }
  }, [editingContact]);

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    console.log({ name, value });

    setForm((form) => ({ ...form, [name]: value }));
  };
  const addHandler = (event) => {
    event.preventDefault();

    if (editingContact) {
      const updatedContacts = contacts.map((c) =>
        c.id === editingContact.id ? { ...form, id: c.id } : c
      );
      setContacts(updatedContacts);
      setEditingContact(null);
    } else {
      addContact({ ...form, id: Date.now() });
    }

    setForm({ name: "", lastName: "", email: "", phone: "", job: "" });
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>ویرایش اطلاعات</h1>
        <p>لطفا اطلاعات خود را وارد کنید</p>
      </div>
      <form onSubmit={addHandler} className={styles.form}>
        <label htmlFor="name"> نام :</label>
        <input
          className={styles.input}
          name="name"
          type="text"
          placeholder="کلیک کنید"
          value={form.name}
          onChange={changeHandler}
        />

        <label htmlFor="lastName"> نام خانوادگی :</label>
        <input
          className={styles.input}
          name="lastName"
          type="text"
          placeholder="کلیک کنید"
          value={form.lastName}
          onChange={changeHandler}
        />

        <label htmlFor="email"> ایمیل :</label>
        <input
          className={styles.input}
          name="email"
          type="email"
          placeholder="کلیک کنید"
          value={form.email}
          onChange={changeHandler}
        />

        <label htmlFor="phone"> شماره تلفن :</label>
        <input
          className={styles.input}
          name="phone"
          type="number"
          placeholder="کلیک کنید"
          value={form.phone}
          onChange={changeHandler}
        />

        <label htmlFor="job"> شغل :</label>
        <input
          className={styles.input}
          name="job"
          type="text"
          placeholder="کلیک کنید"
          value={form.job}
          onChange={changeHandler}
        />

        <button type="submit">
          {editingContact ? "ویرایش مخاطب": "افزودن مخاطب"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
