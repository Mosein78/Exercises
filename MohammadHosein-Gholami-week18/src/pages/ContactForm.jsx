import React, { useContext, useEffect } from "react";
import { ContactContext } from "../context/ContactContext";
import styles from "./ContactForm.module.css";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";



function ContactForm() {
  const schema = yup.object().shape({
    name: yup.string().required("*نام را وارد کنید*"),
    email: yup
      .string()
      .email("*ایمیل نامعتبر است*")
      .required("*ایمیل را وارد کنید*"),
    phone: yup
      .number("شماره موبایل اجباری است")
      .positive("*شماره موبایل وارد کنید*")
      .transform((value, originalValue) => {
        return Number(originalValue);
      })
      .required("*شماره موبایل را وارد کنید*"),
    job: yup.string().required("*نام شغل را وارد کنید*"),
  });

  const { state, dispatch } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();
  

  useEffect(() => {
    if (state.editId !== null && state.contacts.length > 0) {
      const contact =  state.contacts.find((c) => c.id === state.editId);
      if (contact) {
        setValue("name", contact.name);
        setValue("phone", contact.phone);
        setValue("email", contact.email);
        setValue("job", contact.job);
      }
    }
  }, [state.editId , state.contacts]);

  const onFormSubmit = (data) => {
    if (state.editId) {
      dispatch({ type: "UPDATE_CONTACT" ,payload: { id: state.editId, ...data }});
    } else {
      dispatch({ type: "ADD_CONTACT", payload: data });
    }
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className={styles.contactForm}
      >
        <input type="text" placeholder="name" {...register("name")} />
        {errors.name && <p className={styles.errorMessage}>{errors.name?.message}</p>}

        <input placeholder="phone" type="number" {...register("phone")} />
        {errors.phone && <p className={styles.errorMessage}>{errors.phone?.message}</p>}

        <input placeholder="email" type="email" {...register("email")} />
        {errors.email && <p className={styles.errorMessage}>{errors.email?.message}</p>}

        <input placeholder="job" type="text" {...register("job")} />
        {errors.job && <p className={styles.errorMessage}>{errors.job?.message}</p>}

        <button
          type="submit"
          style={{ backgroundColor: state.editId && "#ff9800" }}
        >
          {state.editId ? "Update" : "Add"}
        </button>
      </form>
      <div>
        <ul style={{ textAlign: "center", marginTop: "20px" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#fff",
              padding: "10px 20px",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "10px",
              backgroundColor: "#2196f3",
              fontSize: "14px",
            }}
          >
            صفحه اصلی
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default ContactForm;
